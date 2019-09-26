<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Requirement extends Model
{
    public function requeriments () {
        return $this->belongsTo(Requirement::class);
    }
}
