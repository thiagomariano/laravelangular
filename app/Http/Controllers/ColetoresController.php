<?php

namespace SistemaIntegradoIgrejas\Http\Controllers;

use Authorizer;
use Illuminate\Http\Request;

use SistemaIntegradoIgrejas\Repositories\ColetorRepository;
use SistemaIntegradoIgrejas\Services\ColetorService;

class ColetoresController extends Controller
{

    /**
     * @var ColetorRepository
     */
    private $repository;
    /**
     * @var ColetorService
     */
    private $service;

    /**
     * ColetoresController constructor.
     * @param ColetorRepository $repository
     * @param ColetorService $service
     */
    public function __construct(ColetorRepository $repository, ColetorService $service)
    {
        $this->repository = $repository;
        $this->service = $service;
    }

    public function index()
    {
        #return $this->repository->findWhere(['empresa_id' => \Authorizer::getResourceOwnerId()]);
        return $this->repository->all();
    }

    public function store(Request $request)
    {
        $this->service->create($request->all(), 1);
    }

    public function show($id)
    {
        return $this->repository->find($id);
    }

    public function update(Request $request, $id)
    {
        $this->service->update($request->all(), $id);
    }

    public function destroy($id)
    {
        $this->service->destroy($id);
    }
}
