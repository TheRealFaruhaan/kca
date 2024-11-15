<?php

namespace App\Http\Controllers;

use App\Models\BlogCategory;
use App\Models\BlogPost;
use App\Models\Tag;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogPostController extends Controller
{
    public function index()
    {
        $posts = BlogPost::with('category')->published()
            ->orderBy('publication_date', 'desc')
            ->paginate(9);

        return Inertia::render('Blog', [
            'posts' => $posts
        ]);
    }

    public function show(BlogPost $blogPost)
    {
        $blogPost->load('category');
        $blogPost->load('tags');

        $similarPosts = BlogPost::whereHas('tags', function ($q) use ($blogPost) {
            return $q->whereIn('name', $blogPost->tags()->pluck('name'));
        })->where('id', '!=', $blogPost->id)->with('category')->limit(4)->get();

        return Inertia::render('Post', [
            'post' => $blogPost,
            'similarPosts' => $similarPosts
        ]);
    }

    public function byCategory($category)
    {
        $category = BlogCategory::where('slug', $category)
            ->firstOrFail();

        $posts = $category
            ->posts()
            ->with('category')
            ->published()
            ->orderBy('publication_date', 'desc')
            ->paginate(9);

        return Inertia::render('Blog', [
            'posts' => $posts,
            'category' => $category->name
        ]);
    }

    public function byTag($tag)
    {
        $tag = Tag::where('slug', $tag)
            ->firstOrFail();

        $posts = $tag
            ->posts()
            ->with('category')
            ->published()
            ->orderBy('publication_date', 'desc')
            ->paginate(9);

        return Inertia::render('Blog', [
            'posts' => $posts,
            'tag' => $tag->name
        ]);
    }
}
