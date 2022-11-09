import { ILowCodePluginContext } from '@alilc/lowcode-engine';
import TitleSetter from '@alilc/lowcode-setter-title';
import BehaviorSetter from './setters/behavior-setter';
import CustomSetter from './setters/custom-setter';

// 保存功能示例
const CustomSetterSample = (ctx: ILowCodePluginContext) => {
  return {
    async init() {
      const { setters } = ctx;

      setters.registerSetter('TitleSetter', TitleSetter);
      setters.registerSetter('BehaviorSetter', BehaviorSetter);
      setters.registerSetter('CustomSetter', CustomSetter);
    },
  };
}
CustomSetterSample.pluginName = 'custom-setter-sample';
export default CustomSetterSample;