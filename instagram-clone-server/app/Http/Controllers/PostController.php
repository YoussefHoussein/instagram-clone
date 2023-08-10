<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Following;
use App\Models\User;
use App\Models\Like;

class PostController extends Controller
{
    //
    public function getPosts(Request $request)
{
    $user = User::find($request->id);
    $followings = $user->following()->get();
    $posts = [];

    foreach ($followings as $following) {
        $posts[] = $following->posts()
            ->with('users', 'likes') 
            ->withCount('likes')    
            ->get();
    }

    return $posts;
}
}
