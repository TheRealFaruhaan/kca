<?php

namespace App\Http\Controllers;

use App\Models\Entity;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Laravel\Facades\Image;

class EntityController extends Controller
{
    public function index()
    {
        $entities = Entity::active()->ordered()->get();
        return inertia('Entities/Index', [
            'entities' => $entities
        ]);
    }

    public function show(Entity $entity)
    {
        $entity->load(['activities', 'galleries']);
        return inertia('Entities/Show', [
            'entity' => $entity
        ]);
    }

    public function create()
    {
        return inertia('Entities/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'logo' => 'nullable|image|max:2048',
            'website_url' => 'nullable|url',
            'email' => 'nullable|email',
            'phone' => 'nullable|string|max:20',
            'address' => 'nullable|string|max:255',
            'social_media' => 'nullable|array',
            'order' => 'nullable|integer',
            'is_active' => 'boolean',
        ]);

        // Handle logo upload and thumbnail creation
        if ($request->hasFile('logo')) {
            $logo = $request->file('logo');

            // Save original logo
            $logoPath = $logo->store('images/entities/logos/original', 'public');

            // Create and save thumbnail
            $thumbnail = Image::read($logo);
            $thumbnail->scaleDown(width: 200);
            $thumbnailPath = 'images/entities/logos/thumbnails/' . basename($logoPath);
            $thumbnail->toJpeg(quality: 80)
                ->save(storage_path('app/public/' . $thumbnailPath));

            $validated['logo'] = $logoPath;
            $validated['thumbnail_logo'] = $thumbnailPath;
        }

        // Generate slug
        $validated['slug'] = Str::slug($validated['name']);

        Entity::create($validated);

        return redirect()->route('entities.index')
            ->with('success', 'Entity created successfully.');
    }

    public function edit(Entity $entity)
    {
        return inertia('Entities/Edit', [
            'entity' => $entity
        ]);
    }

    public function update(Request $request, Entity $entity)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'logo' => 'nullable|image|max:2048',
            'website_url' => 'nullable|url',
            'email' => 'nullable|email',
            'phone' => 'nullable|string|max:20',
            'address' => 'nullable|string|max:255',
            'social_media' => 'nullable|array',
            'order' => 'nullable|integer',
            'is_active' => 'boolean',
        ]);

        if ($request->hasFile('logo')) {
            // Delete old images if they exist
            if ($entity->logo) {
                Storage::disk('public')->delete($entity->logo);
            }
            if ($entity->thumbnail_logo) {
                Storage::disk('public')->delete($entity->thumbnail_logo);
            }

            // Save new images
            $logo = $request->file('logo');
            $logoPath = $logo->store('images/entities/logos/original', 'public');

            // Create and save thumbnail
            $thumbnail = Image::read($logo);
            $thumbnail->scaleDown(width: 200);
            $thumbnailPath = 'images/entities/logos/thumbnails/' . basename($logoPath);
            $thumbnail->toJpeg(quality: 80)
                ->save(storage_path('app/public/' . $thumbnailPath));

            $validated['logo'] = $logoPath;
            $validated['thumbnail_logo'] = $thumbnailPath;
        }

        $entity->update($validated);

        return redirect()->route('entities.index')
            ->with('success', 'Entity updated successfully.');
    }

    public function destroy(Entity $entity)
    {
        // Delete associated images
        if ($entity->logo) {
            Storage::disk('public')->delete($entity->logo);
        }
        if ($entity->thumbnail_logo) {
            Storage::disk('public')->delete($entity->thumbnail_logo);
        }

        $entity->delete();

        return redirect()->route('entities.index')
            ->with('success', 'Entity deleted successfully.');
    }
}
