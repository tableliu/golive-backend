/**
 * Copyright (C) Baluart.COM - All Rights Reserved
 *
 * @description JavaScript Form Builder for Easy Forms
 * @since 1.0
 * @author Balu
 * @copyright Copyright (c) 2015 - 2019 Baluart.COM
 * @license http://codecanyon.net/licenses/faq Envato marketplace licenses
 * @link http://easyforms.baluart.com/ Easy Forms
 */

define([
    "jquery" , "underscore" , "backbone"
    , "models/component"
    , "views/tab-component"
    , "views/tab-widget"
], function(
    $, _, Backbone
    , ComponentModel
    , TabComponentView
    , TabWidgetView
    ){
    return Backbone.Collection.extend({
        model: ComponentModel
        , renderAll: function(){
            return this.map(function(component){
                return new TabComponentView({model: component}).render();
            });
        }
        , renderAllAsWidgets: function(){
            return this.map(function(component){
                return new TabWidgetView({model: component}).render();
            });
        }
    });
});