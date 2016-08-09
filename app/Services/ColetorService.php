<?php

namespace SistemaIntegradoIgrejas\Services;

use SistemaIntegradoIgrejas\Repositories\ColetorRepository;
use SistemaIntegradoIgrejas\Repositories\UserRepository;

class ColetorService
{
    /**
     * @var UserRepository
     */
    private $userRepository;
    /**
     * @var ColetorRepository
     */
    private $coletorRepository;

    /**
     * ColetorService constructor.
     * @param UserRepository $userRepository
     * @param ColetorRepository $coletorRepository
     */
    public function __construct(UserRepository $userRepository, ColetorRepository $coletorRepository)
    {
        $this->userRepository = $userRepository;
        $this->coletorRepository = $coletorRepository;
    }

    public function update($request, $id)
    {
        $this->userRepository->update(['email' => $request['email']], $id);
        $this->coletorRepository->update($request, $id);
    }


    public function create($request, $idEmpresa)
    {
        $idUserRegistrado = $this->userRepository->create([
            'password' => bcrypt('123abc!@#'),
            'remember_token' => str_random(10),
            'email' => $request['email']
        ]);

        $request['user_id'] = $idUserRegistrado['data']['id'];
        $request['empresa_id'] = $idEmpresa;
        $this->coletorRepository->create($request);
    }
}