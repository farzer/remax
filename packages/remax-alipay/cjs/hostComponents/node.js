'use strict';
var __importStar =
  (this && this.__importStar) ||
  function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result['default'] = mod;
    return result;
  };
Object.defineProperty(exports, '__esModule', { value: true });
var button = __importStar(require('./Button/node'));
var canvas = __importStar(require('./Canvas/node'));
var checkboxGroup = __importStar(require('./CheckboxGroup/node'));
var checkbox = __importStar(require('./Checkbox/node'));
var contactButton = __importStar(require('./ContactButton/node'));
var coverImage = __importStar(require('./CoverImage/node'));
var coverView = __importStar(require('./CoverView/node'));
var form = __importStar(require('./Form/node'));
var icon = __importStar(require('./Icon/node'));
var image = __importStar(require('./Image/node'));
var input = __importStar(require('./Input/node'));
var label = __importStar(require('./Label/node'));
var lifestyle = __importStar(require('./Lifestyle/node'));
var map = __importStar(require('./Map/node'));
var movableArea = __importStar(require('./MovableArea/node'));
var movableView = __importStar(require('./MovableView/node'));
var navigator = __importStar(require('./Navigator/node'));
var pickerViewColumn = __importStar(require('./PickerViewColumn/node'));
var pickerView = __importStar(require('./PickerView/node'));
var picker = __importStar(require('./Picker/node'));
var progress = __importStar(require('./Progress/node'));
var radioGroup = __importStar(require('./RadioGroup/node'));
var radio = __importStar(require('./Radio/node'));
var richText = __importStar(require('./RichText/node'));
var scrollView = __importStar(require('./ScrollView/node'));
var slider = __importStar(require('./Slider/node'));
var swiperItem = __importStar(require('./SwiperItem/node'));
var swiper = __importStar(require('./Swiper/node'));
var switchComponent = __importStar(require('./Switch/node'));
var text = __importStar(require('./Text/node'));
var textarea = __importStar(require('./Textarea/node'));
var view = __importStar(require('./View/node'));
var webView = __importStar(require('./WebView/node'));
var video = __importStar(require('./Video/node'));
var hostComponents = new Map();
hostComponents.set('button', button);
hostComponents.set('canvas', canvas);
hostComponents.set('checkbox-group', checkboxGroup);
hostComponents.set('checkbox', checkbox);
hostComponents.set('contact-button', contactButton);
hostComponents.set('cover-image', coverImage);
hostComponents.set('cover-view', coverView);
hostComponents.set('form', form);
hostComponents.set('icon', icon);
hostComponents.set('image', image);
hostComponents.set('input', input);
hostComponents.set('label', label);
hostComponents.set('lifestyle', lifestyle);
hostComponents.set('map', map);
hostComponents.set('movable-area', movableArea);
hostComponents.set('movable-view', movableView);
hostComponents.set('navigator', navigator);
hostComponents.set('picker-view-column', pickerViewColumn);
hostComponents.set('picker-view', pickerView);
hostComponents.set('picker', picker);
hostComponents.set('progress', progress);
hostComponents.set('radio-group', radioGroup);
hostComponents.set('radio', radio);
hostComponents.set('rich-text', richText);
hostComponents.set('scroll-view', scrollView);
hostComponents.set('slider', slider);
hostComponents.set('swiper-item', swiperItem);
hostComponents.set('swiper', swiper);
hostComponents.set('switch', switchComponent);
hostComponents.set('text', text);
hostComponents.set('textarea', textarea);
hostComponents.set('view', view);
hostComponents.set('web-view', webView);
hostComponents.set('video', video);
exports.default = hostComponents;