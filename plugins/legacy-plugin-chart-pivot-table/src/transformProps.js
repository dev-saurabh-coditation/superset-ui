/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
export default function transformProps(chartProps) {
  const { height, width, datasource, formData, queryData, hooks } = chartProps;
  const {
    timeGrainSqla,
    groupby,
    numberFormat,
    dateFormat,
    showPaginationAndSearch,
    columnWidthString,
    pageSize,
    columnAlignmentString,
    showTableHeaderAndInfoIcon,
    tableHeader,
    tableDescription,
    filterColumns,
  } = formData;
  const { columnFormats, verboseMap } = datasource;
  const { exportCSV, getKeyOrLableContent, globalSelectControl } = hooks;

  return {
    columnFormats,
    data: queryData.data,
    dateFormat,
    granularity: timeGrainSqla,
    height,
    width,
    numberFormat,
    numGroups: groupby.length,
    groupby,
    verboseMap,
    showPaginationAndSearch,
    getKeyOrLableContent,
    columnWidthArray: columnWidthString ? columnWidthString.split(',').map(i => Number(i)) : [],
    pageSize,
    columnAlignmentArray: columnAlignmentString ? columnAlignmentString.split(',') : [],
    showTableHeaderAndInfoIcon,
    tableHeader,
    tableDescription,
    exportCSV,
    globalSelectControl,
    filterColumns: filterColumns ? filterColumns : [],
  };
}
