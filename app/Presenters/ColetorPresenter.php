<?php

namespace SistemaIntegradoIgrejas\Presenters;

use Prettus\Repository\Presenter\FractalPresenter;
use SistemaIntegradoIgrejas\Transformers\ColetorTransformer;

class ColetorPresenter extends FractalPresenter
{

    public function getTransformer()
    {
        return new ColetorTransformer();
    }
}