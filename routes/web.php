<?php

use App\Http\Controllers\ActivitiesController;
use App\Http\Controllers\BlogPostController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\GalleryController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [WelcomeController::class, 'index']);

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/contact', [ContactController::class, 'index'])->name('contact');
Route::post('/contact', [ContactController::class, 'submit'])->name('contact.submit');

Route::get('/activities', [ActivitiesController::class, 'index'])->name('activities');
Route::get('/activities/{activity:slug}', [ActivitiesController::class, 'show'])->name('activities.show');

Route::get('/blog', [BlogPostController::class, 'index'])->name('blog');
Route::get('/blog/{blogPost:slug}', [BlogPostController::class, 'show'])->name('blog.post');
Route::get('/blog/category/{category}', [BlogPostController::class, 'byCategory'])->name('blog.post');
Route::get('/blog/tag/{tag}', [BlogPostController::class, 'byTag'])->name('blog.post');

// Gallery Routes
Route::get('gallery', [GalleryController::class, 'index'])->name('gallery.index');
Route::get('gallery/{gallery:slug}', [GalleryController::class, 'show'])->name('gallery.show');

require __DIR__ . '/auth.php';

// Admin Routes
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/admin/dashboard', [DashboardController::class, 'index'])->name('dashboard');
});
