<?php if(!defined('__XE__')) exit();
$query = new Query();
$query->setQueryId("insertTodayStatus");
$query->setAction("insert");
$query->setPriority("");

${'regdate2_argument'} = new Argument('regdate', $args->{'regdate'});
${'regdate2_argument'}->ensureDefaultValue('0');
${'regdate2_argument'}->checkNotNull();
if(!${'regdate2_argument'}->isValid()) return ${'regdate2_argument'}->getErrorMessage();
if(${'regdate2_argument'} !== null) ${'regdate2_argument'}->setColumnType('number');

${'unique_visitor3_argument'} = new Argument('unique_visitor', $args->{'unique_visitor'});
${'unique_visitor3_argument'}->ensureDefaultValue('0');
if(!${'unique_visitor3_argument'}->isValid()) return ${'unique_visitor3_argument'}->getErrorMessage();
if(${'unique_visitor3_argument'} !== null) ${'unique_visitor3_argument'}->setColumnType('number');

${'pageview4_argument'} = new Argument('pageview', $args->{'pageview'});
${'pageview4_argument'}->ensureDefaultValue('0');
if(!${'pageview4_argument'}->isValid()) return ${'pageview4_argument'}->getErrorMessage();
if(${'pageview4_argument'} !== null) ${'pageview4_argument'}->setColumnType('number');

$query->setColumns(array(
new InsertExpression('`regdate`', ${'regdate2_argument'})
,new InsertExpression('`unique_visitor`', ${'unique_visitor3_argument'})
,new InsertExpression('`pageview`', ${'pageview4_argument'})
));
$query->setTables(array(
new Table('`xe_counter_status`', '`counter_status`')
));
$query->setConditions(array());
$query->setGroups(array());
$query->setOrder(array());
$query->setLimit();
return $query; ?>