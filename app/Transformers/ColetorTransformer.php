<?php

namespace SistemaIntegradoIgrejas\Transformers;

use SistemaIntegradoIgrejas\Entities\Coletor;
use League\Fractal\TransformerAbstract;

class ColetorTransformer extends TransformerAbstract
{

    public function transform(Coletor $coletor)
    {
        return [
            'id' => $coletor->user_id,
            'nome' => $coletor->nome,
            'email' => $coletor->usuario->email,
            'telefone' => $coletor->telefone,
            'whatsapp' => $coletor->whatsapp,
        ];
    }

}