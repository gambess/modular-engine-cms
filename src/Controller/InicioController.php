<?php

namespace App\Controller;

/**
 * Description of InicioController
 *
 * @author gambess
 */

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class InicioController extends AbstractController {

    #[Route('/', name: 'inicio')]
    public function index(): Response {
        return $this->render('index.html.twig');
    }

}