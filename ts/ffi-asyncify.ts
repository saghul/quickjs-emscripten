// This file generated by "generate.ts ffi-asyncify" in the root of the repo.
import { QuickJSEmscriptenModuleAsyncify } from "./emscripten-types"
import { JSRuntimePointer, JSContextPointer, JSValuePointer, JSValueConstPointer, JSValuePointerPointer, JSValueConstPointerPointer, QTS_C_To_HostCallbackFuncPointer, QTS_C_To_HostInterruptFuncPointer, HeapCharPointer } from "./ffi-types"

/**
 * Low-level FFI bindings to QuickJS's Emscripten module.
 * See instead [[QuickJSVm]], the public Javascript interface exposed by this
 * library.
 *
 * @unstable The FFI interface is considered private and may change.
 */
export class QuickJSAsyncFFI {
  constructor(private module: QuickJSEmscriptenModuleAsyncify) {}

  QTS_SetHostCallback: (fp: QTS_C_To_HostCallbackFuncPointer) => void =
    this.module.cwrap("QTS_SetHostCallback", null, ["number"])

  QTS_ArgvGetJSValueConstPointer: (argv: JSValuePointer | JSValueConstPointer, index: number) => JSValueConstPointer =
    this.module.cwrap("QTS_ArgvGetJSValueConstPointer", "number", ["number","number"])

  QTS_NewFunction: (ctx: JSContextPointer, func_data: JSValuePointer | JSValueConstPointer, name: string) => JSValuePointer =
    this.module.cwrap("QTS_NewFunction", "number", ["number","number","string"])

  QTS_Throw: (ctx: JSContextPointer, error: JSValuePointer | JSValueConstPointer) => JSValuePointer =
    this.module.cwrap("QTS_Throw", "number", ["number","number"])

  QTS_NewError: (ctx: JSContextPointer) => JSValuePointer =
    this.module.cwrap("QTS_NewError", "number", ["number"])

  QTS_SetInterruptCallback: (cb: QTS_C_To_HostInterruptFuncPointer) => void =
    this.module.cwrap("QTS_SetInterruptCallback", null, ["number"])

  QTS_RuntimeEnableInterruptHandler: (rt: JSRuntimePointer) => void =
    this.module.cwrap("QTS_RuntimeEnableInterruptHandler", null, ["number"])

  QTS_RuntimeDisableInterruptHandler: (rt: JSRuntimePointer) => void =
    this.module.cwrap("QTS_RuntimeDisableInterruptHandler", null, ["number"])

  QTS_RuntimeSetMemoryLimit: (rt: JSRuntimePointer, limit: number) => void =
    this.module.cwrap("QTS_RuntimeSetMemoryLimit", null, ["number","number"])

  QTS_RuntimeComputeMemoryUsage: (rt: JSRuntimePointer, ctx: JSContextPointer) => JSValuePointer =
    this.module.cwrap("QTS_RuntimeComputeMemoryUsage", "number", ["number","number"])

  QTS_RuntimeDumpMemoryUsage: (rt: JSRuntimePointer) => string =
    this.module.cwrap("QTS_RuntimeDumpMemoryUsage", "string", ["number"])

  QTS_GetUndefined: () => JSValueConstPointer =
    this.module.cwrap("QTS_GetUndefined", "number", [])

  QTS_GetNull: () => JSValueConstPointer =
    this.module.cwrap("QTS_GetNull", "number", [])

  QTS_GetFalse: () => JSValueConstPointer =
    this.module.cwrap("QTS_GetFalse", "number", [])

  QTS_GetTrue: () => JSValueConstPointer =
    this.module.cwrap("QTS_GetTrue", "number", [])

  QTS_NewRuntime: () => JSRuntimePointer =
    this.module.cwrap("QTS_NewRuntime", "number", [])

  QTS_FreeRuntime: (rt: JSRuntimePointer) => void =
    this.module.cwrap("QTS_FreeRuntime", null, ["number"])

  QTS_NewContext: (rt: JSRuntimePointer) => JSContextPointer =
    this.module.cwrap("QTS_NewContext", "number", ["number"])

  QTS_FreeContext: (ctx: JSContextPointer) => void =
    this.module.cwrap("QTS_FreeContext", null, ["number"])

  QTS_FreeValuePointer: (ctx: JSContextPointer, value: JSValuePointer) => void =
    this.module.cwrap("QTS_FreeValuePointer", null, ["number","number"])

  QTS_DupValuePointer: (ctx: JSContextPointer, val: JSValuePointer | JSValueConstPointer) => JSValuePointer =
    this.module.cwrap("QTS_DupValuePointer", "number", ["number","number"])

  QTS_NewObject: (ctx: JSContextPointer) => JSValuePointer =
    this.module.cwrap("QTS_NewObject", "number", ["number"])

  QTS_NewObjectProto: (ctx: JSContextPointer, proto: JSValuePointer | JSValueConstPointer) => JSValuePointer =
    this.module.cwrap("QTS_NewObjectProto", "number", ["number","number"])

  QTS_NewArray: (ctx: JSContextPointer) => JSValuePointer =
    this.module.cwrap("QTS_NewArray", "number", ["number"])

  QTS_NewFloat64: (ctx: JSContextPointer, num: number) => JSValuePointer =
    this.module.cwrap("QTS_NewFloat64", "number", ["number","number"])

  QTS_GetFloat64: (ctx: JSContextPointer, value: JSValuePointer | JSValueConstPointer) => number =
    this.module.cwrap("QTS_GetFloat64", "number", ["number","number"])

  QTS_NewString: (ctx: JSContextPointer, string: HeapCharPointer) => JSValuePointer =
    this.module.cwrap("QTS_NewString", "number", ["number","number"])

  QTS_GetString: (ctx: JSContextPointer, value: JSValuePointer | JSValueConstPointer) => string =
    this.module.cwrap("QTS_GetString", "string", ["number","number"])

  QTS_IsJobPending: (rt: JSRuntimePointer) => number =
    this.module.cwrap("QTS_IsJobPending", "number", ["number"])

  QTS_ExecutePendingJob: (rt: JSRuntimePointer, maxJobsToExecute: number) => Promise<JSValuePointer> =
    this.module.cwrap("QTS_ExecutePendingJob", "number", ["number","number"], { async: true })

  QTS_GetProp: (ctx: JSContextPointer, this_val: JSValuePointer | JSValueConstPointer, prop_name: JSValuePointer | JSValueConstPointer) => Promise<JSValuePointer> =
    this.module.cwrap("QTS_GetProp", "number", ["number","number","number"], { async: true })

  QTS_SetProp: (ctx: JSContextPointer, this_val: JSValuePointer | JSValueConstPointer, prop_name: JSValuePointer | JSValueConstPointer, prop_value: JSValuePointer | JSValueConstPointer) => Promise<void> =
    this.module.cwrap("QTS_SetProp", null, ["number","number","number","number"], { async: true })

  QTS_DefineProp: (ctx: JSContextPointer, this_val: JSValuePointer | JSValueConstPointer, prop_name: JSValuePointer | JSValueConstPointer, prop_value: JSValuePointer | JSValueConstPointer, get: JSValuePointer | JSValueConstPointer, set: JSValuePointer | JSValueConstPointer, configurable: boolean, enumerable: boolean, has_value: boolean) => void =
    this.module.cwrap("QTS_DefineProp", null, ["number","number","number","number","number","number","boolean","boolean","boolean"])

  QTS_Call: (ctx: JSContextPointer, func_obj: JSValuePointer | JSValueConstPointer, this_obj: JSValuePointer | JSValueConstPointer, argc: number, argv_ptrs: JSValueConstPointerPointer) => Promise<JSValuePointer> =
    this.module.cwrap("QTS_Call", "number", ["number","number","number","number","number"], { async: true })

  QTS_ResolveException: (ctx: JSContextPointer, maybe_exception: JSValuePointer) => JSValuePointer =
    this.module.cwrap("QTS_ResolveException", "number", ["number","number"])

  QTS_Dump: (ctx: JSContextPointer, obj: JSValuePointer | JSValueConstPointer) => Promise<string> =
    this.module.cwrap("QTS_Dump", "string", ["number","number"], { async: true })

  QTS_Eval: (ctx: JSContextPointer, js_code: HeapCharPointer, filename: string) => Promise<JSValuePointer> =
    this.module.cwrap("QTS_Eval", "number", ["number","number","string"], { async: true })

  QTS_Typeof: (ctx: JSContextPointer, value: JSValuePointer | JSValueConstPointer) => string =
    this.module.cwrap("QTS_Typeof", "string", ["number","number"])

  QTS_GetGlobalObject: (ctx: JSContextPointer) => JSValuePointer =
    this.module.cwrap("QTS_GetGlobalObject", "number", ["number"])

  QTS_NewPromiseCapability: (ctx: JSContextPointer, resolve_funcs_out: JSValuePointerPointer) => JSValuePointer =
    this.module.cwrap("QTS_NewPromiseCapability", "number", ["number","number"])

  QTS_TestStringArg: (string: string) => void =
    this.module.cwrap("QTS_TestStringArg", null, ["string"])
}
