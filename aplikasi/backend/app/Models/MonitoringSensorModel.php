<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MonitoringSensorModel extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'monitoring_sensor';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id_lokasi',
        'id_data_sensor',
        'nama_lahan',
        'luas_lahan',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'id_lokasi' => 'integer',
        'id_data_sensor' => 'integer',
        'luas_lahan' => 'float',
    ];

    /**
     * Get the lokasi that this monitoring sensor belongs to.
     */
    public function lokasi()
    {
        return $this->belongsTo(LokasiModel::class, 'id_lokasi', 'id');
    }

    /**
     * Get the data sensor that is linked to this monitoring.
     */
    public function dataSensor()
    {
        return $this->belongsTo(DatasensorModel::class, 'id_data_sensor', 'id');
    }

    /**
     * Get the hasil analisis records associated with this monitoring sensor.
     */
    public function hasilAnalisis()
    {
        return $this->hasMany(HasilAnalisisModel::class, 'id_monitoring_sensor', 'id');
    }
}
