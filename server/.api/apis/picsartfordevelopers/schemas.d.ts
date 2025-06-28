declare const GenaiCreditsBalance: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly credits: {
                    readonly type: "integer";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "402": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "405": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "413": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "415": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "431": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GenaiExpandImage: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["prompt"];
        readonly properties: {
            readonly image: {
                readonly description: "Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)";
                readonly type: "string";
                readonly format: "binary";
            };
            readonly image_url: {
                readonly type: "string";
                readonly description: "Source image URL. (If this parameter is present, the other image source parameters must be empty.)";
                readonly maxLength: 2083;
                readonly minLength: 1;
                readonly format: "uri";
            };
            readonly image_id: {
                readonly type: "string";
                readonly description: "Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.)";
            };
            readonly prompt: {
                readonly type: "string";
                readonly description: "The prompt.";
            };
            readonly negative_prompt: {
                readonly type: "string";
                readonly description: "The negative prompt (don’t generate this type of images). Don't use the nagitve keywords such as 'no', e.g. don't use 'no distorted faces', use 'distorted faces'.";
            };
            readonly width: {
                readonly type: "integer";
                readonly description: "Specify the width of the output image in pixels. The default is 1024 and the maximum acceptable value is 8000.";
                readonly default: 1024;
                readonly maximum: 8000;
            };
            readonly height: {
                readonly type: "integer";
                readonly description: "Specify the width of the output image in pixels. The default is 1024 and the maximum acceptable value is 8000.";
                readonly default: 1024;
                readonly maximum: 8000;
            };
            readonly direction: {
                readonly type: "string";
                readonly default: "center";
                readonly enum: readonly ["center", "top-left", "top-right", "bottom-left", "bottom-right"];
                readonly description: "Use this parameter to define in which direction the source image should be expanded. Available values are:\n  * center: Add pixels and expand the image from all sides. The original image will remain in the center.\n  * top-left: Add pixels and expand to the top-left. The original image will remain the bottom-right corner.\n  * top-right: Add pixels and expand to the top-right. The original image will remain the bottom-left corner.\n  * bottom-left: Add pixels and expand to the bottom-left. The original image will remain the top-right corner.\n  * bottom-right:Add pixels and expand to the bottom-right. The original image will remain the top-left corner.\n";
            };
            readonly count: {
                readonly type: "integer";
                readonly description: "The number of images to generate.";
                readonly minimum: 1;
                readonly maximum: 6;
                readonly default: 4;
                readonly examples: readonly [3];
            };
            readonly format: {
                readonly type: "string";
                readonly default: "JPG";
                readonly enum: readonly ["JPG", "PNG", "WEBP"];
                readonly description: "Optionally select one of the image formats (JPG is default). Options are as follows:\n  * JPG\n  * PNG\n  * WEBP\n";
            };
            readonly mode: {
                readonly type: "string";
                readonly default: "sync";
                readonly enum: readonly ["sync", "async", "auto"];
                readonly description: "Use this query parameter to establish the processing mode. Acceptable values are sync, async and auto (sync is default):\n  * sync: issues a synchronous request, response is given when the result is ready.\n  * async: forces an asynchronous request, the response, which is instantaneous, contains a \"transaction_id\" which is used to poll for the result.\n  * auto: the processing mode decision is made by the service, which depends upon the expected processing time.\n";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly url: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "202": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                };
                readonly inference_id: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "402": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "405": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "413": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "415": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "431": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GenaiGenerateImageBleed: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["bleed_size"];
        readonly properties: {
            readonly image: {
                readonly description: "Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)";
                readonly type: "string";
                readonly format: "binary";
            };
            readonly image_url: {
                readonly type: "string";
                readonly description: "Source image URL. (If this parameter is present, the other image source parameters must be empty.)";
                readonly maxLength: 2083;
                readonly minLength: 1;
                readonly format: "uri";
            };
            readonly image_id: {
                readonly type: "string";
                readonly description: "Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.)";
            };
            readonly prompt: {
                readonly type: "string";
                readonly description: "The prompt. Only apply if you are confident the provided prompt is going to generate good results. Otherwise leave empty as the default prompt is already optimized for bleed generation.";
            };
            readonly negative_prompt: {
                readonly type: "string";
                readonly description: "The negative prompt (don’t generate this type of images). Don't use the nagitve keywords such as 'no', e.g. don't use 'no distorted faces', use 'distorted faces'.";
            };
            readonly bleed_size: {
                readonly type: "integer";
                readonly description: "Specify the width of the output image in pixels. The default is 1024 and the maximum acceptable value is 8000.";
                readonly default: 5;
                readonly minimum: 1;
                readonly maximum: 75;
            };
            readonly format: {
                readonly type: "string";
                readonly default: "JPG";
                readonly enum: readonly ["JPG", "PNG", "WEBP"];
                readonly description: "Optionally select one of the image formats (JPG is default). Options are as follows:\n  * JPG\n  * PNG\n  * WEBP\n";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                        };
                        readonly url: {
                            readonly type: "string";
                        };
                    };
                };
                readonly status: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "402": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "405": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "413": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "415": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "431": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GenaiGenerateLogo: {
    readonly body: {
        readonly required: readonly ["prompt"];
        readonly type: "object";
        readonly properties: {
            readonly brand_name: {
                readonly type: "string";
                readonly description: "Simply add your brand or company name.";
            };
            readonly business_description: {
                readonly type: "string";
                readonly description: "Describe your business, what it does. This information will be used to create logos that describe your brand.";
            };
            readonly color_tone: {
                readonly type: "string";
                readonly enum: readonly ["Auto", "Gray", "Blue", "Pink", "Orange", "Brown", "Yellow", "Green", "Purple", "Red"];
                readonly description: "Optionally select one of the color tones for the generated logos (Auto is default). Options are as follows:\n  * Auto\n  * Gray\n  * Blue\n  * Pink\n  * Orange\n  * Brown\n  * Yellow\n  * Green\n  * Purple\n  * Red\n";
                readonly default: "Auto";
            };
            readonly logo_description: {
                readonly type: "string";
                readonly description: "Describe your logo details. What elements and details it should include, and how you imagine it should look like.";
            };
            readonly reference_image: {
                readonly description: "Use one of the reference parameters to give a logo example. The service will then use this along with business and logo description to create a similar logo. Reference logo image (binary). (If this parameter is present, the other reference logo parameters must be empty.)";
                readonly type: "string";
                readonly format: "binary";
            };
            readonly reference_image_url: {
                readonly type: "string";
                readonly description: "Reference logo URL. (If this parameter is present, the other reference logo parameters must be empty.)";
                readonly maxLength: 2083;
                readonly minLength: 1;
                readonly format: "uri";
            };
            readonly reference_image_id: {
                readonly type: "string";
                readonly description: "Reference logo image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other reference logo parameters must be empty.)";
            };
            readonly count: {
                readonly type: "number";
                readonly default: 2;
                readonly minimum: 1;
                readonly maximum: 10;
                readonly description: "The number of logos to generate.";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "202": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly default: "success";
                    readonly enum: readonly ["success", "error", "processing", "queued"];
                    readonly description: "`success` `error` `processing` `queued`";
                };
                readonly inference_id: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "402": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "405": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "413": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "415": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "431": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GenaiGenerateLogoGetresult: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly inference_id: {
                    readonly type: "string";
                    readonly examples: readonly ["1116b57cb-1999-4bfd-8c42-c739a006a111"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The inference identifier returned from the POST method [Logo Generator](https://docs.picsart.io/reference/genai-generate-logo).";
                };
            };
            readonly required: readonly ["inference_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly url: {
                                readonly type: "string";
                            };
                            readonly status: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "202": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly default: "success";
                    readonly enum: readonly ["success", "error", "processing", "queued"];
                    readonly description: "`success` `error` `processing` `queued`";
                };
                readonly inference_id: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "402": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "405": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "413": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "415": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "431": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GenaiImageInpainting: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["prompt"];
        readonly properties: {
            readonly image: {
                readonly description: "Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)";
                readonly type: "string";
                readonly format: "binary";
            };
            readonly image_url: {
                readonly type: "string";
                readonly description: "Source image URL. (If this parameter is present, the other image source parameters must be empty.)";
                readonly maxLength: 2083;
                readonly minLength: 1;
                readonly format: "uri";
            };
            readonly image_id: {
                readonly type: "string";
                readonly description: "Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.)";
            };
            readonly mask: {
                readonly description: "Source mask file (binary). (If this parameter is present, the other mask source parameters must be empty.)";
                readonly type: "string";
                readonly format: "binary";
            };
            readonly mask_url: {
                readonly type: "string";
                readonly description: "Source mask URL. (If this parameter is present, the other mask source parameters must be empty.)";
                readonly maxLength: 2083;
                readonly minLength: 1;
                readonly format: "uri";
            };
            readonly mask_id: {
                readonly type: "string";
                readonly description: "Source mask ID of an mask previously uploaded to Picsart or result mask ID from a different API. (If this parameter is present, the other mask source parameters must be empty.)";
            };
            readonly prompt: {
                readonly type: "string";
                readonly description: "The prompt.";
            };
            readonly negative_prompt: {
                readonly type: "string";
                readonly description: "The negative prompt (don’t generate this type of images). Don't use the nagitve keywords such as 'no', e.g. don't use 'no distorted faces', use 'distorted faces'.";
            };
            readonly count: {
                readonly type: "integer";
                readonly description: "The number of images to generate.";
                readonly minimum: 1;
                readonly maximum: 6;
                readonly default: 4;
                readonly examples: readonly [3];
            };
            readonly format: {
                readonly type: "string";
                readonly default: "JPG";
                readonly enum: readonly ["JPG", "PNG", "WEBP"];
                readonly description: "Optionally select one of the image formats (JPG is default). Options are as follows:\n  * JPG\n  * PNG\n  * WEBP\n";
            };
            readonly mode: {
                readonly type: "string";
                readonly default: "sync";
                readonly enum: readonly ["sync", "async", "auto"];
                readonly description: "Use this query parameter to establish the processing mode. Acceptable values are sync, async and auto (sync is default):\n  * sync: issues a synchronous request, response is given when the result is ready.\n  * async: forces an asynchronous request, the response, which is instantaneous, contains a \"transaction_id\" which is used to poll for the result.\n  * auto: the processing mode decision is made by the service, which depends upon the expected processing time.\n";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly url: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "202": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                };
                readonly inference_id: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "402": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "405": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "413": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "415": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "431": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GenaiImageInpaintingGetresult: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly inference_id: {
                    readonly type: "string";
                    readonly examples: readonly ["1116b57cb-1999-4bfd-8c42-c739a006a111"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The painting inference identifier.";
                };
            };
            readonly required: readonly ["inference_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly url: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "202": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                };
                readonly inference_id: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "402": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "405": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "413": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "415": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "431": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GenaiImageOutpainting: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["prompt"];
        readonly properties: {
            readonly image: {
                readonly description: "Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)";
                readonly type: "string";
                readonly format: "binary";
            };
            readonly image_url: {
                readonly type: "string";
                readonly description: "Source image URL. (If this parameter is present, the other image source parameters must be empty.)";
                readonly maxLength: 2083;
                readonly minLength: 1;
                readonly format: "uri";
            };
            readonly image_id: {
                readonly type: "string";
                readonly description: "Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.)";
            };
            readonly mask: {
                readonly description: "Source mask file (binary). (If this parameter is present, the other mask source parameters must be empty.)";
                readonly type: "string";
                readonly format: "binary";
            };
            readonly mask_url: {
                readonly type: "string";
                readonly description: "Source mask URL. (If this parameter is present, the other mask source parameters must be empty.)";
                readonly maxLength: 2083;
                readonly minLength: 1;
                readonly format: "uri";
            };
            readonly mask_id: {
                readonly type: "string";
                readonly description: "Source mask ID of an mask previously uploaded to Picsart or result mask ID from a different API. (If this parameter is present, the other mask source parameters must be empty.)";
            };
            readonly prompt: {
                readonly type: "string";
                readonly description: "The prompt.";
            };
            readonly negative_prompt: {
                readonly type: "string";
                readonly description: "The negative prompt (don’t generate this type of images). Don't use the nagitve keywords such as 'no', e.g. don't use 'no distorted faces', use 'distorted faces'.";
            };
            readonly count: {
                readonly type: "integer";
                readonly description: "The number of images to generate.";
                readonly minimum: 1;
                readonly maximum: 6;
                readonly default: 4;
                readonly examples: readonly [3];
            };
            readonly format: {
                readonly type: "string";
                readonly default: "JPG";
                readonly enum: readonly ["JPG", "PNG", "WEBP"];
                readonly description: "Optionally select one of the image formats (JPG is default). Options are as follows:\n  * JPG\n  * PNG\n  * WEBP\n";
            };
            readonly mode: {
                readonly type: "string";
                readonly default: "sync";
                readonly enum: readonly ["sync", "async", "auto"];
                readonly description: "Use this query parameter to establish the processing mode. Acceptable values are sync, async and auto (sync is default):\n  * sync: issues a synchronous request, response is given when the result is ready.\n  * async: forces an asynchronous request, the response, which is instantaneous, contains a \"transaction_id\" which is used to poll for the result.\n  * auto: the processing mode decision is made by the service, which depends upon the expected processing time.\n";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly url: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "202": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                };
                readonly inference_id: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "402": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "405": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "413": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "415": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "431": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GenaiSmartBackground: {
    readonly body: {
        readonly type: "object";
        readonly required: readonly ["prompt"];
        readonly properties: {
            readonly image: {
                readonly description: "Source image file (binary). (If this parameter is present, the other image source parameters must be empty.)";
                readonly type: "string";
                readonly format: "binary";
            };
            readonly image_url: {
                readonly type: "string";
                readonly description: "Source image URL. (If this parameter is present, the other image source parameters must be empty.)";
                readonly maxLength: 2083;
                readonly minLength: 1;
                readonly format: "uri";
            };
            readonly image_id: {
                readonly type: "string";
                readonly description: "Source image ID of an image previously uploaded to Picsart or result image ID from a different API. (If this parameter is present, the other image source parameters must be empty.)";
            };
            readonly prompt: {
                readonly type: "string";
                readonly description: "The prompt.";
            };
            readonly negative_prompt: {
                readonly type: "string";
                readonly description: "The negative prompt (don’t generate this type of images). Don't use the nagitve keywords such as 'no', e.g. don't use 'no distorted faces', use 'distorted faces'.";
            };
            readonly count: {
                readonly type: "integer";
                readonly description: "The number of images to generate.";
                readonly minimum: 1;
                readonly maximum: 6;
                readonly default: 4;
                readonly examples: readonly [3];
            };
            readonly format: {
                readonly type: "string";
                readonly default: "JPG";
                readonly enum: readonly ["JPG", "PNG", "WEBP"];
                readonly description: "Optionally select one of the image formats (JPG is default). Options are as follows:\n  * JPG\n  * PNG\n  * WEBP\n";
            };
            readonly mode: {
                readonly type: "string";
                readonly default: "sync";
                readonly enum: readonly ["sync", "async", "auto"];
                readonly description: "Use this query parameter to establish the processing mode. Acceptable values are sync, async and auto (sync is default):\n  * sync: issues a synchronous request, response is given when the result is ready.\n  * async: forces an asynchronous request, the response, which is instantaneous, contains a \"transaction_id\" which is used to poll for the result.\n  * auto: the processing mode decision is made by the service, which depends upon the expected processing time.\n";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly url: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "202": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                };
                readonly inference_id: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "402": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "405": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "413": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "415": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "431": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GenaiText2Image: {
    readonly body: {
        readonly required: readonly ["prompt"];
        readonly type: "object";
        readonly properties: {
            readonly prompt: {
                readonly type: "string";
                readonly description: "The prompt.";
            };
            readonly negative_prompt: {
                readonly type: "string";
                readonly description: "The negative prompt (don’t generate this type of images). Don't use the nagitve keywords such as 'no', e.g. don't use 'no distorted faces', use 'distorted faces'.";
            };
            readonly width: {
                readonly type: "number";
                readonly description: "Width of the image.";
                readonly default: 1024;
                readonly maximum: 2048;
                readonly minimum: 120;
                readonly examples: readonly [512];
            };
            readonly height: {
                readonly type: "number";
                readonly description: "Height of the image.";
                readonly default: 1024;
                readonly maximum: 2048;
                readonly minimum: 120;
                readonly examples: readonly [512];
            };
            readonly count: {
                readonly type: "number";
                readonly default: 2;
                readonly minimum: 1;
                readonly maximum: 10;
                readonly description: "The number of images to generate.";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "202": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly default: "success";
                    readonly enum: readonly ["success", "error", "processing", "queued"];
                    readonly description: "`success` `error` `processing` `queued`";
                };
                readonly inference_id: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "402": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "405": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "413": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "415": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "431": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GenaiText2ImageGetresult: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly inference_id: {
                    readonly type: "string";
                    readonly examples: readonly ["1116b57cb-1999-4bfd-8c42-c739a006a111"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID returned from the POST method when it's done asynchronously.";
                };
            };
            readonly required: readonly ["inference_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly url: {
                                readonly type: "string";
                            };
                            readonly status: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "202": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly default: "success";
                    readonly enum: readonly ["success", "error", "processing", "queued"];
                    readonly description: "`success` `error` `processing` `queued`";
                };
                readonly inference_id: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "402": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "405": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "413": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "415": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "431": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GenaiText2Sticker: {
    readonly body: {
        readonly required: readonly ["prompt"];
        readonly type: "object";
        readonly properties: {
            readonly prompt: {
                readonly type: "string";
                readonly description: "The prompt.";
            };
            readonly negative_prompt: {
                readonly type: "string";
                readonly description: "The negative prompt (don’t generate this type of images). Don't use the nagitve keywords such as 'no', e.g. don't use 'no distorted faces', use 'distorted faces'.";
            };
            readonly width: {
                readonly type: "number";
                readonly description: "Width of the image.";
                readonly default: 1024;
                readonly maximum: 2048;
                readonly minimum: 120;
                readonly examples: readonly [512];
            };
            readonly height: {
                readonly type: "number";
                readonly description: "Height of the image.";
                readonly default: 1024;
                readonly maximum: 2048;
                readonly minimum: 120;
                readonly examples: readonly [512];
            };
            readonly count: {
                readonly type: "number";
                readonly default: 2;
                readonly minimum: 1;
                readonly maximum: 10;
                readonly description: "The number of images to generate.";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "202": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly default: "success";
                    readonly enum: readonly ["success", "error", "processing", "queued"];
                    readonly description: "`success` `error` `processing` `queued`";
                };
                readonly inference_id: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "402": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "405": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "413": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "415": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "431": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GenaiText2StickerGetresult: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly inference_id: {
                    readonly type: "string";
                    readonly examples: readonly ["1116b57cb-1999-4bfd-8c42-c739a006a111"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID returned from the POST method when it's done asynchronously.";
                };
            };
            readonly required: readonly ["inference_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                            };
                            readonly url: {
                                readonly type: "string";
                            };
                            readonly status: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "202": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly default: "success";
                    readonly enum: readonly ["success", "error", "processing", "queued"];
                    readonly description: "`success` `error` `processing` `queued`";
                };
                readonly inference_id: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "402": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "405": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "413": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "415": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "431": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GenaiText2StickerLaserEngraving: {
    readonly body: {
        readonly required: readonly ["prompt"];
        readonly type: "object";
        readonly properties: {
            readonly prompt: {
                readonly type: "string";
                readonly description: "The prompt.";
            };
            readonly negative_prompt: {
                readonly type: "string";
                readonly description: "The negative prompt (don’t generate this type of images). Don't use the nagitve keywords such as 'no', e.g. don't use 'no distorted faces', use 'distorted faces'.";
            };
            readonly width: {
                readonly type: "number";
                readonly description: "Width of the image.";
                readonly default: 1024;
                readonly maximum: 2048;
                readonly minimum: 120;
                readonly examples: readonly [512];
            };
            readonly height: {
                readonly type: "number";
                readonly description: "Height of the image.";
                readonly default: 1024;
                readonly maximum: 2048;
                readonly minimum: 120;
                readonly examples: readonly [512];
            };
            readonly count: {
                readonly type: "number";
                readonly default: 2;
                readonly minimum: 1;
                readonly maximum: 10;
                readonly description: "The number of images to generate.";
            };
            readonly engrave_color: {
                readonly type: "string";
                readonly description: "Can be a hexcolor code (e.g., #82d5fa, #fff) or a color name (e.g., blue). For semi-transparency, 4-/8-digit hexcodes are also supported (e.g., #18d4ff87). (If this parameter is present, the other bg_ parameters must be empty).\n";
                readonly default: "black";
            };
            readonly background_color: {
                readonly type: "string";
                readonly description: "Can be a hexcolor code (e.g., #82d5fa, #fff) or a color name (e.g., blue). For semi-transparency, 4-/8-digit hexcodes are also supported (e.g., #18d4ff87). (If this parameter is present, the other bg_ parameters must be empty).\n";
                readonly default: "white";
            };
            readonly format: {
                readonly type: "string";
                readonly default: "JPG";
                readonly enum: readonly ["JPG", "PNG", "WEBP", "SVG"];
                readonly description: "Optionally select one of the output image formats (JPG is chosen if left blank). Options are as follows:\n  * JPG\n  * PNG\n  * WEBP\n  * SVG\n";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "202": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly default: "success";
                    readonly enum: readonly ["success", "error", "processing", "queued"];
                    readonly description: "`success` `error` `processing` `queued`";
                };
                readonly inference_id: {
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "402": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "405": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "413": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "415": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "431": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GenaiText2TextCompletions: {
    readonly body: {
        readonly required: readonly ["messages"];
        readonly type: "object";
        readonly properties: {
            readonly messages: {
                readonly type: "array";
                readonly description: "The messages containing the original text and instructions.";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly role: {
                            readonly type: "string";
                            readonly description: "Each message object has a role (either system, user, or assistant) and content.\nThe system message is optional and can be used to set the behavior of the assistant The user messages provide requests or comments for the assistant to respond to Assistant messages store previous assistant responses, but can also be written by you to give examples of desired behavior.\n";
                        };
                        readonly content: {
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly max_tokens: {
                readonly type: "number";
                readonly default: 512;
            };
            readonly temperature: {
                readonly type: "number";
                readonly default: 1;
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                };
                readonly data: {
                    readonly type: "string";
                    readonly description: "The response to the provided messages/instructions.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "402": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "405": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "413": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "415": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "431": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "503": {
            readonly type: "object";
            readonly properties: {
                readonly code: {
                    readonly type: "integer";
                };
                readonly message: {
                    readonly type: "string";
                };
                readonly detail: {
                    readonly type: "string";
                };
            };
            readonly required: readonly ["detail"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { GenaiCreditsBalance, GenaiExpandImage, GenaiGenerateImageBleed, GenaiGenerateLogo, GenaiGenerateLogoGetresult, GenaiImageInpainting, GenaiImageInpaintingGetresult, GenaiImageOutpainting, GenaiSmartBackground, GenaiText2Image, GenaiText2ImageGetresult, GenaiText2Sticker, GenaiText2StickerGetresult, GenaiText2StickerLaserEngraving, GenaiText2TextCompletions };
