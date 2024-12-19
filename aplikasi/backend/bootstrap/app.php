<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        // Tambahkan Sanctum middleware di grup 'api'
        $middleware->group('api', [
            
            EnsureFrontendRequestsAreStateful::class,
            'throttle:api',
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
        ]);

        // Tambahkan pengecualian CSRF untuk route tertentu
        $middleware->validateCsrfTokens(except: [
            '/*', // Semua URL yang berhubungan dengan posts dikecualikan dari CSRF
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
