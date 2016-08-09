<?php

namespace SistemaIntegradoIgrejas\Http\Controllers;

use Authorizer;
use Illuminate\Http\Request;
use SistemaIntegradoIgrejas\Repositories\ClientRepository;
use SistemaIntegradoIgrejas\Services\ClientService;

class EmpresaController extends Controller
{
    /**
     * @var ClientRepository
     */
    private $repository;
    /**
     * @var ClientService
     */
    private $service;

    /**
     * ClientController constructor.
     * @param ClientRepository $repository
     * @param ClientService $service
     */
    public function __construct(ClientRepository $repository, ClientService $service)
    {
        $this->repository = $repository;
        $this->service = $service;
    }

    public function index()
    {
        return $this->repository->all();
    }

    public function store(Request $request)
    {
        $this->service->create($request);
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
