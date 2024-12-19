<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HasilAnalisisModel extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'hasil_analisis';

    /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'id_hasil_analisis';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id_monitoring_sensor',
        'pupuk_1',
        'pupuk_2',
        'pupuk_3',
        'jenis_tanah',
        'jumlah_pupuk_1',
        'total_harga_pupuk1',
        'jumlah_pupuk_2',
        'total_harga_pupuk2',
        'jumlah_pupuk_3',
        'total_harga_pupuk3',
        'total_harga',
        'pupuk_tambahan',
        'jumlah_pupuk_tambahan',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'jumlah_pupuk_1' => 'float',
        'total_harga_pupuk1' => 'integer',
        'jumlah_pupuk_2' => 'float',
        'total_harga_pupuk2' => 'integer',
        'jumlah_pupuk_3' => 'float',
        'total_harga_pupuk3' => 'integer',
        'total_harga' => 'integer',
        'jumlah_pupuk_tambahan' => 'float',
    ];

    /**
     * Get the monitoring sensor that belongs to this analysis.
     */
    public function monitoringSensor()
    {
        return $this->belongsTo(MonitoringSensorModel::class, 'id_monitoring_sensor', 'id');
    }
}
