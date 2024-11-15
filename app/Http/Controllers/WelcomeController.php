<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\TeamMember;
use App\Models\Testimonial;
use Inertia\Inertia;

class WelcomeController extends Controller
{
    public function index()
    {
        $recentActivities = Activity::latest()
            ->take(5)  // Get only the 5 most recent activities
            ->get();

        $teamMembers = TeamMember::where('is_active', true)
            ->orderBy('order')
            ->get();

        $testimonials = Testimonial::where('is_active', true)
            ->orderBy('order')
            ->get();

        return Inertia::render('Welcome', [
            'recentActivities' => $recentActivities,
            'teamMembers' => $teamMembers,
            'testimonials' => $testimonials
        ]);
    }
}
