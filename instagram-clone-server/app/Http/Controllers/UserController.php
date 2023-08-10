<?php

namespace App\Http\Controllers;
use Auth;
use Illuminate\Support\Str;
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
                return response()->json(['message' => 'following']); 
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
    public function unFollow(Request $request){
        $follower_id= Auth::user()->id;
        $followed_id = $request->followed_id;

        $followings = Following::where("follower_id", $follower_id)->get();

        foreach($followings as $following){
            if($following->followed_id == $followed_id){
                $post->delete(); 
            }
        }
        return response()->json(['message' => 'unliked']); 
    }
    public function search(Request $request){
        $sub_name = $request->name;
        $users =  User::all();
        $result = [];
        foreach($users as $user){
            if (Str::startsWith($user->name, $sub_name)){
                $result[] = $user;
            }
        }
        if(count($result)==0){
            return response()->json(['message' => 'user not found']);
        }
        return $result;
    }
}
