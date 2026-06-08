<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
 protected $fillable = [
    'customer_name',
    'vehicle_number',
    'package_type',
    'price'
];
}