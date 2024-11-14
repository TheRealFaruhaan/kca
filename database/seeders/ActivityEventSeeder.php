<?php

namespace Database\Seeders;

use App\Models\Activity;
use App\Models\ActivityEvent;
use Illuminate\Database\Seeder;

class ActivityEventSeeder extends Seeder
{
    public function run()
    {
        Activity::all()->each(function ($activity) {
            // Common event templates for activities
            $eventTemplates = [
                [
                    'title' => 'Project Kickoff',
                    'description' => 'Initial meeting to define project scope and objectives',
                    'event_date' => now()->subMonths(6)
                ],
                [
                    'title' => 'Planning Phase Completed',
                    'description' => 'Finalized project timeline, resource allocation, and key deliverables',
                    'event_date' => now()->subMonths(5)
                ],
                [
                    'title' => 'First Milestone Achieved',
                    'description' => 'Successfully completed the first phase of implementation',
                    'event_date' => now()->subMonths(3)
                ],
                [
                    'title' => 'Mid-project Review',
                    'description' => 'Conducted comprehensive review of progress and adjusted strategies as needed',
                    'event_date' => now()->subMonths(2)
                ],
                [
                    'title' => 'Stakeholder Presentation',
                    'description' => 'Presented current progress to key stakeholders and gathered feedback',
                    'event_date' => now()->subMonths(1)
                ],
                [
                    'title' => 'Final Implementation Phase',
                    'description' => 'Beginning the final phase of project implementation',
                    'event_date' => now()->subWeeks(2)
                ],
                [
                    'title' => 'Quality Assurance Review',
                    'description' => 'Comprehensive testing and quality checks performed',
                    'event_date' => now()->subWeeks(1)
                ],
                [
                    'title' => 'Project Completion',
                    'description' => 'Successfully achieved all project objectives and deliverables',
                    'event_date' => now()
                ]
            ];

            // Select 3-5 random events from the templates
            $selectedEvents = collect($eventTemplates)
                ->random(rand(3, 5))
                ->sortBy('event_date');

            foreach ($selectedEvents as $event) {
                ActivityEvent::create([
                    'activity_id' => $activity->id,
                    'title' => $event['title'],
                    'description' => $event['description'],
                    'event_date' => $event['event_date']
                ]);
            }
        });
    }
}
