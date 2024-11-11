<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WelcomeController extends Controller
{
    public function index()
    {
        $recentActivities = Activity::latest()
            ->take(5)  // Get only the 3 most recent activities
            ->get();

        return Inertia::render('Welcome', [
            'recentActivities' => $recentActivities
        ]);
    }
}
