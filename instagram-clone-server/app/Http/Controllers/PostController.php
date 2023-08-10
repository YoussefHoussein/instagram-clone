<?php

namespace App\Http\Controllers;
use Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\Post;
use App\Models\Following;
use App\Models\User;
use App\Models\Like;

class PostController extends Controller
{
    public function createPost(Request $request){
        
        $imageData = $request->image;
        $imageData = str_replace('data:image/jpeg;base64,', '', $imageData); 

        $decodedImage = base64_decode($imageData);
        $imagePath = 'uploads/' . Str::random(10) . '.jpg'; 
        file_put_contents(public_path($imagePath), $decodedImage);

        $post = new Post();
        $post->image = $imagePath;
        $post->user_id = Auth::user()->id;
        $post->save();
        return response()->json(['message' => 'Post created successfully']);
    }
    //
//     public function getPosts(Request $request)
// {
//     $user = User::find($request->id);
//     $followings = $user->following()->get();
//     $posts = [];

//     foreach ($followings as $following) {
//         $posts[] = $following->posts()
//             ->with('users', 'likes') 
//             ->withCount('likes')    
//             ->get();
//     }

//     return $posts;
// }
}
