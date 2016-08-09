<?php

namespace SistemaIntegradoIgrejas\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use SistemaIntegradoIgrejas\Entities\Coletor;
use SistemaIntegradoIgrejas\Presenters\ColetorPresenter;

class ColetorRepositoryEloquent extends BaseRepository implements ColetorRepository
{

    /**
     * @var array
     */
    protected $fieldSearchable = [
        'nome',
    ];

    public function model()
    {
        return Coletor::class;
    }

    public function presenter()
    {
        #return parent::presenter(); // TODO: Change the autogenerated stub
        return ColetorPresenter::class;
    }

    public function boot(){
        $this->pushCriteria(app('Prettus\Repository\Criteria\RequestCriteria'));
    }

}