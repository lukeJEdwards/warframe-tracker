import type { AxiosInstance, AxiosResponse } from "axios";

export async function load_Manifest<T>(
  session: AxiosInstance,
  PublicExport: string,
  func?: (response: AxiosResponse<any, any>) => T
): Promise<T | AxiosResponse<any, any>> {
  const response: Awaited<T | AxiosResponse<any, any>> = await session
    .get(`https://content.warframe.com/PublicExport/Manifest/${PublicExport}`)
    .then((response) => (func ? func(response) : response));
  return response;
}
