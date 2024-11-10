<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\ContactMessage;
use App\Notifications\NewContactMessage;
use Illuminate\Support\Facades\Notification;

class ContactController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Contact');
    }

    public function submit(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'mobile' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string|max:1000',
        ]);

        $message = ContactMessage::create($validated);

        // Optional: Send notification to admin
        // try {
        //     Notification::route('mail', config('mail.admin_email'))
        //         ->notify(new NewContactMessage($message));
        // } catch (\Exception $e) {
        //     logger()->error('Failed to send contact notification: ' . $e->getMessage());
        // }

        return back()->with('message', 'Thank you for your message. We will get back to you soon!');
    }
}
