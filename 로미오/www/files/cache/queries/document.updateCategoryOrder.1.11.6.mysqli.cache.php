<?php if(!defined('__XE__')) exit();
$query = new Query();
$query->setQueryId("updateCategoryOrder");
$query->setAction("update");
$query->setPriority("");

${'list_order2_argument'} = new Argument('list_order', NULL);
${'list_order2_argument'}->setColumnOperation('+');
${'list_order2_argument'}->ensureDefaultValue(1);
if(!${'list_order2_argument'}->isValid()) return ${'list_order2_argument'}->getErrorMessage();
if(${'list_order2_argument'} !== null) ${'list_order2_argument'}->setColumnType('number');

${'module_srl3_argument'} = new ConditionArgument('module_srl', $args->module_srl, 'equal');
${'module_srl3_argument'}->checkFilter('number');
${'module_srl3_argument'}->checkNotNull();
${'module_srl3_argument'}->createConditionValue();
if(!${'module_srl3_argument'}->isValid()) return ${'module_srl3_argument'}->getErrorMessage();
if(${'module_srl3_argument'} !== null) ${'module_srl3_argument'}->setColumnType('number');

${'list_order4_argument'} = new ConditionArgument('list_order', $args->list_order, 'more');
${'list_order4_argument'}->checkFilter('number');
${'list_order4_argument'}->checkNotNull();
${'list_order4_argument'}->createConditionValue();
if(!${'list_order4_argument'}->isValid()) return ${'list_order4_argument'}->getErrorMessage();
if(${'list_order4_argument'} !== null) ${'list_order4_argument'}->setColumnType('number');

$query->setColumns(array(
new UpdateExpression('`list_order`', ${'list_order2_argument'})
));
$query->setTables(array(
new Table('`xe_document_categories`', '`document_categories`')
));
$query->setConditions(array(
new ConditionGroup(array(
new ConditionWithArgument('`module_srl`',$module_srl3_argument,"equal")
,new ConditionWithArgument('`list_order`',$list_order4_argument,"more", 'and')))
));
$query->setGroups(array());
$query->setOrder(array());
$query->setLimit();
return $query; ?>