<?php

namespace SistemaIntegradoIgrejas\Presenters;

use Prettus\Repository\Presenter\FractalPresenter;
use SistemaIntegradoIgrejas\Transformers\UserTransformer;

class UserPresenter extends FractalPresenter
{

    public function getTransformer()
    {
        return new UserTransformer();
    }
}