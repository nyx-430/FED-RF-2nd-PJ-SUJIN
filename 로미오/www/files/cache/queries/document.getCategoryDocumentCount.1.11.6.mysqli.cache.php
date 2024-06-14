<?php if(!defined('__XE__')) exit();
$query = new Query();
$query->setQueryId("getCategoryDocumentCount");
$query->setAction("select");
$query->setPriority("");

${'category_srl4_argument'} = new ConditionArgument('category_srl', $args->category_srl, 'equal');
${'category_srl4_argument'}->checkFilter('number');
${'category_srl4_argument'}->checkNotNull();
${'category_srl4_argument'}->createConditionValue();
if(!${'category_srl4_argument'}->isValid()) return ${'category_srl4_argument'}->getErrorMessage();
if(${'category_srl4_argument'} !== null) ${'category_srl4_argument'}->setColumnType('number');

${'module_srl5_argument'} = new ConditionArgument('module_srl', $args->module_srl, 'equal');
${'module_srl5_argument'}->checkFilter('number');
${'module_srl5_argument'}->checkNotNull();
${'module_srl5_argument'}->createConditionValue();
if(!${'module_srl5_argument'}->isValid()) return ${'module_srl5_argument'}->getErrorMessage();
if(${'module_srl5_argument'} !== null) ${'module_srl5_argument'}->setColumnType('number');

$query->setColumns(array(
new SelectExpression('count(*)', '`count`')
));
$query->setTables(array(
new Table('`xe_documents`', '`documents`')
));
$query->setConditions(array(
new ConditionGroup(array(
new ConditionWithArgument('`category_srl`',$category_srl4_argument,"equal")
,new ConditionWithArgument('`module_srl`',$module_srl5_argument,"equal", 'and')))
));
$query->setGroups(array());
$query->setOrder(array());
$query->setLimit();
return $query; ?>