<?php if(!defined('__XE__')) exit();
$query = new Query();
$query->setQueryId("insertModulePartConfig");
$query->setAction("insert");
$query->setPriority("");

${'module5_argument'} = new Argument('module', $args->{'module'});
${'module5_argument'}->checkNotNull();
if(!${'module5_argument'}->isValid()) return ${'module5_argument'}->getErrorMessage();
if(${'module5_argument'} !== null) ${'module5_argument'}->setColumnType('varchar');

${'module_srl6_argument'} = new Argument('module_srl', $args->{'module_srl'});
${'module_srl6_argument'}->checkNotNull();
if(!${'module_srl6_argument'}->isValid()) return ${'module_srl6_argument'}->getErrorMessage();
if(${'module_srl6_argument'} !== null) ${'module_srl6_argument'}->setColumnType('number');
if(isset($args->config)) {
${'config7_argument'} = new Argument('config', $args->{'config'});
if(!${'config7_argument'}->isValid()) return ${'config7_argument'}->getErrorMessage();
} else
${'config7_argument'} = NULL;if(${'config7_argument'} !== null) ${'config7_argument'}->setColumnType('text');

${'regdate8_argument'} = new Argument('regdate', $args->{'regdate'});
${'regdate8_argument'}->ensureDefaultValue(date("YmdHis"));
if(!${'regdate8_argument'}->isValid()) return ${'regdate8_argument'}->getErrorMessage();
if(${'regdate8_argument'} !== null) ${'regdate8_argument'}->setColumnType('date');

$query->setColumns(array(
new InsertExpression('`module`', ${'module5_argument'})
,new InsertExpression('`module_srl`', ${'module_srl6_argument'})
,new InsertExpression('`config`', ${'config7_argument'})
,new InsertExpression('`regdate`', ${'regdate8_argument'})
));
$query->setTables(array(
new Table('`xe_module_part_config`', '`module_part_config`')
));
$query->setConditions(array());
$query->setGroups(array());
$query->setOrder(array());
$query->setLimit();
return $query; ?>