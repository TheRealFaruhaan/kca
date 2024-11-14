<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ActivitiesController extends Controller
{
    public function index()
    {
        $activities = Activity::all();

        return Inertia::render('Activities', [
            'activities' => $activities
        ]);
    }

    public function show(Activity $activity)
    {
        $activity->load('events'); // Assuming you have events relationship
        $activity->load('entities');
        $activity->load('galleries');
        return Inertia::render('Activity', [
            'activity' => $activity
        ]);
    }
}
