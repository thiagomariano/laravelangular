<?php

namespace SistemaIntegradoIgrejas\Entities;

use Illuminate\Database\Eloquent\Model;

class Coletor extends Model
{
    protected $table = 'coletores';

    protected $fillable = [
        'user_id',
        'empresa_id',
        'endereco',
        'nome',
        'telefone',
        'whatsapp',
        'cpf',
        'status'
    ];

    public function usuario()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

}
