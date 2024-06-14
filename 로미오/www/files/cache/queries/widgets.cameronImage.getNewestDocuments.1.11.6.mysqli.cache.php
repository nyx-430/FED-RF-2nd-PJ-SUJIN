<?php if(!defined('__XE__')) exit();
$query = new Query();
$query->setQueryId("getNewestDocuments");
$query->setAction("select");
$query->setPriority("");

${'module_srl4_argument'} = new ConditionArgument('module_srl', $args->module_srl, 'in');
${'module_srl4_argument'}->checkFilter('number');
${'module_srl4_argument'}->checkNotNull();
${'module_srl4_argument'}->createConditionValue();
if(!${'module_srl4_argument'}->isValid()) return ${'module_srl4_argument'}->getErrorMessage();
if(${'module_srl4_argument'} !== null) ${'module_srl4_argument'}->setColumnType('number');
if(isset($args->category_srl)) {
${'category_srl5_argument'} = new ConditionArgument('category_srl', $args->category_srl, 'in');
${'category_srl5_argument'}->createConditionValue();
if(!${'category_srl5_argument'}->isValid()) return ${'category_srl5_argument'}->getErrorMessage();
} else
${'category_srl5_argument'} = NULL;if(${'category_srl5_argument'} !== null) ${'category_srl5_argument'}->setColumnType('number');
if(isset($args->duration_article)) {
${'duration_article6_argument'} = new ConditionArgument('duration_article', $args->duration_article, 'more');
${'duration_article6_argument'}->createConditionValue();
if(!${'duration_article6_argument'}->isValid()) return ${'duration_article6_argument'}->getErrorMessage();
} else
${'duration_article6_argument'} = NULL;if(${'duration_article6_argument'} !== null) ${'duration_article6_argument'}->setColumnType('date');

${'page9_argument'} = new Argument('page', $args->{'page'});
${'page9_argument'}->ensureDefaultValue('1');
if(!${'page9_argument'}->isValid()) return ${'page9_argument'}->getErrorMessage();

${'page_count10_argument'} = new Argument('page_count', $args->{'page_count'});
${'page_count10_argument'}->ensureDefaultValue('10');
if(!${'page_count10_argument'}->isValid()) return ${'page_count10_argument'}->getErrorMessage();

${'list_count11_argument'} = new Argument('list_count', $args->{'list_count'});
${'list_count11_argument'}->ensureDefaultValue('50');
if(!${'list_count11_argument'}->isValid()) return ${'list_count11_argument'}->getErrorMessage();

${'sort_index7_argument'} = new Argument('sort_index', $args->{'sort_index'});
${'sort_index7_argument'}->ensureDefaultValue('documents.list_order');
if(!${'sort_index7_argument'}->isValid()) return ${'sort_index7_argument'}->getErrorMessage();

${'order_type8_argument'} = new SortArgument('order_type8', $args->order_type);
${'order_type8_argument'}->ensureDefaultValue('asc');
if(!${'order_type8_argument'}->isValid()) return ${'order_type8_argument'}->getErrorMessage();

$query->setColumns(array(
new StarExpression()
));
$query->setTables(array(
new Table('`xe_documents`', '`documents`')
));
$query->setConditions(array(
new ConditionGroup(array(
new ConditionWithoutArgument('`documents`.`module_srl`','0',"notin", 'and')
,new ConditionWithArgument('`documents`.`module_srl`',$module_srl4_argument,"in", 'and')
,new ConditionWithArgument('`documents`.`category_srl`',$category_srl5_argument,"in", 'and')))
,new ConditionGroup(array(
new ConditionWithArgument('`documents`.`last_update`',$duration_article6_argument,"more", 'and')),'and')
));
$query->setGroups(array());
$query->setOrder(array(
new OrderByColumn(${'sort_index7_argument'}, $order_type8_argument)
));
$query->setLimit(new Limit(${'list_count11_argument'}, ${'page9_argument'}, ${'page_count10_argument'}));
return $query; ?>