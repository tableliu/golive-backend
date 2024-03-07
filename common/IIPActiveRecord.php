<?php

namespace app\common;
use yii\db\ActiveRecord;


class IIPActiveRecord extends ActiveRecord
{
    public function formName()
    {
        return "";
    }

    public function load($data, $formName = null)
    {

        $scope = $formName === null;
        if (!empty($data)) {
            $this->setAttributes($data);

            return true;
        } elseif (isset($data[$scope])) {
            $this->setAttributes($data[$scope]);

            return true;
        }


        return false;
    }

    public function getJsonFineErrors($attribute = null)
    {

        $errors = $this->getErrors($attribute);
        if (count($errors) <= 0)
            return "";
        $jsonError = [];
        $nv = "";
        foreach ($errors as $key => $value) {
            if (is_array($value)) {
                $nv = implode(",", $value);
            } elseif (is_string($value)) {
                $nv = $value;
            }
            $jsonError[$key] = $nv;
        }

        return $jsonError;
    }


}