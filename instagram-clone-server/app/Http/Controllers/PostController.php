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
    public function checkLiked(Request $request){
        $post_id = $request->post_id;
        $user_id = Auth::user()->id;

        $posts_liked = Like::where("liker_id", $user_id)->get();

        foreach($posts_liked as $post){
            if($post->post_id == $post_id){
                return response()->json(['message' => 'this post is liked']); 
            }
        }
        return response()->json(['message' => 'this post is not liked']); 
    }
    public function like(Request $request){
        $post_id = $request->post_id;
        $user_id = Auth::user()->id;

        $like = new Like();
        $like->liker_id = $user_id;
        $like->post_id = $post_id;
        $like->save();

        return response()->json(['message' => 'Post liked successfully']);
    }
    public function unLike(Request $request){
        $post_id = $request->post_id;
        $user_id = Auth::user()->id;

        $posts_liked = Like::where("liker_id", $user_id)->get();

        foreach($posts_liked as $post){
            if($post->post_id == $post_id){
                $post->delete(); 
            }
        }
        return response()->json(['message' => 'unliked']); 
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
