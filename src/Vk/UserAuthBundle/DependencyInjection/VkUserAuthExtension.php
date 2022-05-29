<?php 

namespace App\Vk\UserAuthBundle\DependencyInjection;


use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Loader\YamlFileLoader;
use Symfony\Component\HttpKernel\DependencyInjection\Extension;

class VkUserAuthExtension extends Extension {

    public function load(array $configs, ContainerBuilder $container)
    {
        $loader =new YamlFileLoader($container, new FileLocator(__DIR__.'/../Resources/config'));
        $loader->load('controller');

    }

}   