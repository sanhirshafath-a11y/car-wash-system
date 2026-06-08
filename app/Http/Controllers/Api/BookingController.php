<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function index()
    {
        return response()->json(Booking::all());
    }

   public function store(Request $request)
{
    $booking = Booking::create([
        'customer_name' => $request->customer_name,
        'vehicle_number' => $request->vehicle_number,
        'package_type' => $request->package_type,
        'price' => $request->price,
    ]);

    return response()->json([
        'message' => 'Booking created successfully',
        'data' => $booking
    ], 201);
}
}