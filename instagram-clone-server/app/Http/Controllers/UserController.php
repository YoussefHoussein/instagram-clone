<?php

namespace App\Http\Controllers;
use Auth;
use Illuminate\Http\Request;
use App\Models\Following;
use App\Models\User;
class UserController extends Controller
{
    //
    public function checkFollowing(Request $request){
        $follower_id= Auth::user()->id;
        $followed_id = $request->followed_id;

        $followings = Following::where("follower_id", $follower_id)->get();

        foreach($followings as $following){
            if($following->followed_id == $followed_id){
                return response()->json(['message' => 'followed']); 
            }
        }
        return response()->json(['message' => 'follow']); 
    }
    public function follow(Request $request){
        $follower_id= Auth::user()->id;
        $followed_id = $request->followed_id;

        $follow = new Following();
        $follow->follower_id = $follower_id;
        $follow->followed_id = $followed_id;
        $follow->save();

        return response()->json(['message' => 'user followed successfully']);
    }
}
