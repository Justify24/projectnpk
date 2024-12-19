<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DatasensorModel extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'data_sensor';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'ph',
        'fosfor',
        'kalium',
        'moisture',
        'suhu',
        'natrium',
        'waktuambil',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'ph' => 'float',
        'fosfor' => 'integer',
        'kalium' => 'integer',
        'moisture' => 'float',
        'suhu' => 'float',
        'natrium' => 'float',
    ];

    /**
     * Get the monitoring records that are associated with this data sensor.
     */
    public function monitoringSensor()
    {
        return $this->hasMany(MonitoringSensorModel::class, 'id_data_sensor', 'id');
    }
}
