export const runtime = "nodejs";

import masterDataService from "@/lib/services/master-data.service";
import {
  getErrorMessage,
  jsonError,
  jsonSuccess,
  readJsonBody,
} from "@/lib/utils/api-response";
import { MasterDataRequestSchema } from "@/lib/validators/master-data.validator";

export async function POST(request: Request) {
  try {
    MasterDataRequestSchema.parse(await readJsonBody(request));
    const items = await masterDataService.getActiveCategories();

    return jsonSuccess({
      success: true,
      items,
    });
  } catch (error) {
    console.error("CATEGORIES_POST_ERROR", error);
    return jsonError(getErrorMessage(error, "Failed to fetch categories."), 500);
  }
}
