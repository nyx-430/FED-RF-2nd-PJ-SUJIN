<?php if(!defined('__XE__')) exit();
$query = new Query();
$query->setQueryId("deleteModulePartConfig");
$query->setAction("delete");
$query->setPriority("");

${'module3_argument'} = new ConditionArgument('module', $args->module, 'equal');
${'module3_argument'}->checkNotNull();
${'module3_argument'}->createConditionValue();
if(!${'module3_argument'}->isValid()) return ${'module3_argument'}->getErrorMessage();
if(${'module3_argument'} !== null) ${'module3_argument'}->setColumnType('varchar');

${'module_srl4_argument'} = new ConditionArgument('module_srl', $args->module_srl, 'equal');
${'module_srl4_argument'}->checkNotNull();
${'module_srl4_argument'}->createConditionValue();
if(!${'module_srl4_argument'}->isValid()) return ${'module_srl4_argument'}->getErrorMessage();
if(${'module_srl4_argument'} !== null) ${'module_srl4_argument'}->setColumnType('number');

$query->setTables(array(
new Table('`xe_module_part_config`', '`module_part_config`')
));
$query->setConditions(array(
new ConditionGroup(array(
new ConditionWithArgument('`module`',$module3_argument,"equal")
,new ConditionWithArgument('`module_srl`',$module_srl4_argument,"equal", 'and')))
));
$query->setGroups(array());
$query->setOrder(array());
$query->setLimit();
return $query; ?>