<?php

namespace SistemaIntegradoIgrejas\Events;

use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Queue\SerializesModels;
use SistemaIntegradoIgrejas\Entities\Pesquisa;

class PesquisaWasIncluded extends Event implements ShouldBroadcast
{
    use SerializesModels;

    /**
     * @var Pesquisa
     */
    public $pesquisa;

    /**
     * PesquisaWasIncluded constructor.
     * @param Pesquisa $pesquisa
     */
    public function __construct(Pesquisa $pesquisa)
    {
        $this->pesquisa = $pesquisa;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array
     */
    public function broadcastOn()
    {
        return ['user.' . \Authorizer::getResourceOwnerId()];
    }
}