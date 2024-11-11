<?php

namespace App\Http\Controllers;

use App\Models\BlogPost;
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

    public function show($slug)
    {
        $post = BlogPost::published()
            ->where('slug', $slug)
            ->firstOrFail();

        return Inertia::render('Blog/Show', [
            'post' => $post
        ]);
    }

    public function byCategory($category)
    {
        $posts = BlogPost::published()
            ->byCategory($category)
            ->orderBy('publication_date', 'desc')
            ->paginate(9);

        return Inertia::render('Blog/Index', [
            'posts' => $posts,
            'category' => $category
        ]);
    }

    public function byTag($tag)
    {
        $posts = BlogPost::published()
            ->withTag($tag)
            ->orderBy('publication_date', 'desc')
            ->paginate(9);

        return Inertia::render('Blog/Index', [
            'posts' => $posts,
            'tag' => $tag
        ]);
    }
}
