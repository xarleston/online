<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Requirement extends Model
{

    protected $fillable = ['course_id', 'requirement'];

    public function requeriments () {
        return $this->belongsTo(Requirement::class);
    }
}
