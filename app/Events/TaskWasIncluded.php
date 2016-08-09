<?php

namespace SistemaIntegradoIgrejas\Events;

use Authorizer;
use SistemaIntegradoIgrejas\Entities\Coletor;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Queue\SerializesModels;

class TaskWasIncluded extends Event implements ShouldBroadcast
{
    use SerializesModels;

    public $task;

    public function __construct(Coletor $task)
    {
        $this->task = $task;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array
     */
    public function broadcastOn()
    {
        return ['user.' . Authorizer::getResourceOwnerId()];
    }
}