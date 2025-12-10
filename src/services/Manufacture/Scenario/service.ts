import {ParamsType} from "@ant-design/pro-components";
import {SortOrder} from "antd/es/table/interface";
import {apiDelete, apiGetById, apiPost, apiPut, apiPutPage} from "@/services/common";
import {Scenario, ScenarioFilter} from "@/services/Manufacture/Scenario/data";

const base_url = `manufacture/scenarios`;

export async function createScenario(data: Scenario) {
  return apiPost(base_url, data);
}

export async function getScenarios(params: ParamsType, sorter?: Record<string, SortOrder>, filter?: ScenarioFilter) {
  return apiPutPage<Scenario>(base_url, params, filter, sorter);
}

export async function getScenarioById(id: string) {
  return apiGetById<Scenario>(base_url, id);
}

export async function deleteScenario(recordId: string) {
  const url = `${base_url}/${recordId}`
  return apiDelete(url, recordId);
}

export async function updateScenario(data: Scenario) {
  return apiPut(base_url, data);
}
