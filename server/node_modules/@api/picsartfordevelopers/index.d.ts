import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values: string[] | number[]): this;
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url: string, variables?: {}): void;
    /**
     * **Service Description:**
     *  The *Text2Text Completion* service helps generate a text based on the text introduced
     * as input by the user.
     * It also takes the pain out of writing to give your social, marketing, and advertising
     * copy a premium edge.
     *
     * @summary Text2Text Completions
     * @throws FetchError<400, types.GenaiText2TextCompletionsResponse400> Bad Request
     * @throws FetchError<401, types.GenaiText2TextCompletionsResponse401> Unauthorized
     * @throws FetchError<402, types.GenaiText2TextCompletionsResponse402> Payment Required
     * @throws FetchError<403, types.GenaiText2TextCompletionsResponse403> Forbidden
     * @throws FetchError<404, types.GenaiText2TextCompletionsResponse404> Not Found
     * @throws FetchError<405, types.GenaiText2TextCompletionsResponse405> Method Not Allowed
     * @throws FetchError<413, types.GenaiText2TextCompletionsResponse413> Request Entity Too Large
     * @throws FetchError<415, types.GenaiText2TextCompletionsResponse415> Unsupported Media Type
     * @throws FetchError<429, types.GenaiText2TextCompletionsResponse429> Too Many Requests
     * @throws FetchError<431, types.GenaiText2TextCompletionsResponse431> Request Header Fields Too Large
     * @throws FetchError<500, types.GenaiText2TextCompletionsResponse500> Internal Server Error
     * @throws FetchError<503, types.GenaiText2TextCompletionsResponse503> Service Unavailable
     */
    genaiText2textCompletions(body: types.GenaiText2TextCompletionsBodyParam): Promise<FetchResponse<200, types.GenaiText2TextCompletionsResponse200>>;
    /**
     * **Service Description:** The *Text2Image* service helps generate an image based on the
     * text introduced as input by the user.
     * The result images can be as big as 2048x2048 images, the default size is 1024x1024
     * pixels.
     *
     * @summary Text2Image
     * @throws FetchError<400, types.GenaiText2ImageResponse400> Bad Request
     * @throws FetchError<401, types.GenaiText2ImageResponse401> Unauthorized
     * @throws FetchError<402, types.GenaiText2ImageResponse402> Payment Required
     * @throws FetchError<403, types.GenaiText2ImageResponse403> Forbidden
     * @throws FetchError<404, types.GenaiText2ImageResponse404> Not Found
     * @throws FetchError<405, types.GenaiText2ImageResponse405> Method Not Allowed
     * @throws FetchError<413, types.GenaiText2ImageResponse413> Request Entity Too Large
     * @throws FetchError<415, types.GenaiText2ImageResponse415> Unsupported Media Type
     * @throws FetchError<429, types.GenaiText2ImageResponse429> Too Many Requests
     * @throws FetchError<431, types.GenaiText2ImageResponse431> Request Header Fields Too Large
     * @throws FetchError<500, types.GenaiText2ImageResponse500> Internal Server Error
     * @throws FetchError<503, types.GenaiText2ImageResponse503> Service Unavailable
     */
    genaiText2image(body: types.GenaiText2ImageBodyParam): Promise<FetchResponse<202, types.GenaiText2ImageResponse202>>;
    /**
     * **Service Description:**
     *
     * @summary Text2Image
     * @throws FetchError<400, types.GenaiText2ImageGetresultResponse400> Bad Request
     * @throws FetchError<401, types.GenaiText2ImageGetresultResponse401> Unauthorized
     * @throws FetchError<402, types.GenaiText2ImageGetresultResponse402> Payment Required
     * @throws FetchError<403, types.GenaiText2ImageGetresultResponse403> Forbidden
     * @throws FetchError<404, types.GenaiText2ImageGetresultResponse404> Not Found
     * @throws FetchError<405, types.GenaiText2ImageGetresultResponse405> Method Not Allowed
     * @throws FetchError<413, types.GenaiText2ImageGetresultResponse413> Request Entity Too Large
     * @throws FetchError<415, types.GenaiText2ImageGetresultResponse415> Unsupported Media Type
     * @throws FetchError<429, types.GenaiText2ImageGetresultResponse429> Too Many Requests
     * @throws FetchError<431, types.GenaiText2ImageGetresultResponse431> Request Header Fields Too Large
     * @throws FetchError<500, types.GenaiText2ImageGetresultResponse500> Internal Server Error
     * @throws FetchError<503, types.GenaiText2ImageGetresultResponse503> Service Unavailable
     */
    genaiText2imageGetresult(metadata: types.GenaiText2ImageGetresultMetadataParam): Promise<FetchResponse<200, types.GenaiText2ImageGetresultResponse200> | FetchResponse<202, types.GenaiText2ImageGetresultResponse202>>;
    /**
     * The *Text2Sticker* service helps generate a sticker based on the text introduced as
     * input by the user.
     * The result images can be as big as 2048x2048 images, the default size is 1024x1024
     * pixels.
     *
     * @summary Text2Sticker
     * @throws FetchError<400, types.GenaiText2StickerResponse400> Bad Request
     * @throws FetchError<401, types.GenaiText2StickerResponse401> Unauthorized
     * @throws FetchError<402, types.GenaiText2StickerResponse402> Payment Required
     * @throws FetchError<403, types.GenaiText2StickerResponse403> Forbidden
     * @throws FetchError<404, types.GenaiText2StickerResponse404> Not Found
     * @throws FetchError<405, types.GenaiText2StickerResponse405> Method Not Allowed
     * @throws FetchError<413, types.GenaiText2StickerResponse413> Request Entity Too Large
     * @throws FetchError<415, types.GenaiText2StickerResponse415> Unsupported Media Type
     * @throws FetchError<429, types.GenaiText2StickerResponse429> Too Many Requests
     * @throws FetchError<431, types.GenaiText2StickerResponse431> Request Header Fields Too Large
     * @throws FetchError<500, types.GenaiText2StickerResponse500> Internal Server Error
     * @throws FetchError<503, types.GenaiText2StickerResponse503> Service Unavailable
     */
    genaiText2sticker(body: types.GenaiText2StickerBodyParam): Promise<FetchResponse<202, types.GenaiText2StickerResponse202>>;
    /**
     * This service generates stickers similar to the standard /text2sticker service, and in
     * addition to that it adds a laser engraving effect.
     * The result images can be as big as 2048x2048 images, the default size is 1024x1024
     * pixels.
     *
     * @summary Text2Sticker with Laser Engraving Effect
     * @throws FetchError<400, types.GenaiText2StickerLaserEngravingResponse400> Bad Request
     * @throws FetchError<401, types.GenaiText2StickerLaserEngravingResponse401> Unauthorized
     * @throws FetchError<402, types.GenaiText2StickerLaserEngravingResponse402> Payment Required
     * @throws FetchError<403, types.GenaiText2StickerLaserEngravingResponse403> Forbidden
     * @throws FetchError<404, types.GenaiText2StickerLaserEngravingResponse404> Not Found
     * @throws FetchError<405, types.GenaiText2StickerLaserEngravingResponse405> Method Not Allowed
     * @throws FetchError<413, types.GenaiText2StickerLaserEngravingResponse413> Request Entity Too Large
     * @throws FetchError<415, types.GenaiText2StickerLaserEngravingResponse415> Unsupported Media Type
     * @throws FetchError<429, types.GenaiText2StickerLaserEngravingResponse429> Too Many Requests
     * @throws FetchError<431, types.GenaiText2StickerLaserEngravingResponse431> Request Header Fields Too Large
     * @throws FetchError<500, types.GenaiText2StickerLaserEngravingResponse500> Internal Server Error
     * @throws FetchError<503, types.GenaiText2StickerLaserEngravingResponse503> Service Unavailable
     */
    genaiText2stickerLaserEngraving(body: types.GenaiText2StickerLaserEngravingBodyParam): Promise<FetchResponse<202, types.GenaiText2StickerLaserEngravingResponse202>>;
    /**
     * **Service Description:**
     *
     * @summary Get the Text2Sticker result
     * @throws FetchError<400, types.GenaiText2StickerGetresultResponse400> Bad Request
     * @throws FetchError<401, types.GenaiText2StickerGetresultResponse401> Unauthorized
     * @throws FetchError<402, types.GenaiText2StickerGetresultResponse402> Payment Required
     * @throws FetchError<403, types.GenaiText2StickerGetresultResponse403> Forbidden
     * @throws FetchError<404, types.GenaiText2StickerGetresultResponse404> Not Found
     * @throws FetchError<405, types.GenaiText2StickerGetresultResponse405> Method Not Allowed
     * @throws FetchError<413, types.GenaiText2StickerGetresultResponse413> Request Entity Too Large
     * @throws FetchError<415, types.GenaiText2StickerGetresultResponse415> Unsupported Media Type
     * @throws FetchError<429, types.GenaiText2StickerGetresultResponse429> Too Many Requests
     * @throws FetchError<431, types.GenaiText2StickerGetresultResponse431> Request Header Fields Too Large
     * @throws FetchError<500, types.GenaiText2StickerGetresultResponse500> Internal Server Error
     * @throws FetchError<503, types.GenaiText2StickerGetresultResponse503> Service Unavailable
     */
    genaiText2stickerGetresult(metadata: types.GenaiText2StickerGetresultMetadataParam): Promise<FetchResponse<200, types.GenaiText2StickerGetresultResponse200> | FetchResponse<202, types.GenaiText2StickerGetresultResponse202>>;
    /**
     * Generate logos using company info, general description. You can add additional
     * information to guide on the details you want to get on the logo. It is also possible to
     * provide an example logo to generate similar logos.
     *
     * @summary Logo Generator
     * @throws FetchError<400, types.GenaiGenerateLogoResponse400> Bad Request
     * @throws FetchError<401, types.GenaiGenerateLogoResponse401> Unauthorized
     * @throws FetchError<402, types.GenaiGenerateLogoResponse402> Payment Required
     * @throws FetchError<403, types.GenaiGenerateLogoResponse403> Forbidden
     * @throws FetchError<404, types.GenaiGenerateLogoResponse404> Not Found
     * @throws FetchError<405, types.GenaiGenerateLogoResponse405> Method Not Allowed
     * @throws FetchError<413, types.GenaiGenerateLogoResponse413> Request Entity Too Large
     * @throws FetchError<415, types.GenaiGenerateLogoResponse415> Unsupported Media Type
     * @throws FetchError<429, types.GenaiGenerateLogoResponse429> Too Many Requests
     * @throws FetchError<431, types.GenaiGenerateLogoResponse431> Request Header Fields Too Large
     * @throws FetchError<500, types.GenaiGenerateLogoResponse500> Internal Server Error
     * @throws FetchError<503, types.GenaiGenerateLogoResponse503> Service Unavailable
     */
    genaiGenerateLogo(body: types.GenaiGenerateLogoBodyParam): Promise<FetchResponse<202, types.GenaiGenerateLogoResponse202>>;
    /**
     * Get the results of your logo generation. Use the inference identifier from the [Logo
     * Generator](https://docs.picsart.io/reference/genai-generate-logo).
     *
     * @summary Get the Logo generation result
     * @throws FetchError<400, types.GenaiGenerateLogoGetresultResponse400> Bad Request
     * @throws FetchError<401, types.GenaiGenerateLogoGetresultResponse401> Unauthorized
     * @throws FetchError<402, types.GenaiGenerateLogoGetresultResponse402> Payment Required
     * @throws FetchError<403, types.GenaiGenerateLogoGetresultResponse403> Forbidden
     * @throws FetchError<404, types.GenaiGenerateLogoGetresultResponse404> Not Found
     * @throws FetchError<405, types.GenaiGenerateLogoGetresultResponse405> Method Not Allowed
     * @throws FetchError<413, types.GenaiGenerateLogoGetresultResponse413> Request Entity Too Large
     * @throws FetchError<415, types.GenaiGenerateLogoGetresultResponse415> Unsupported Media Type
     * @throws FetchError<429, types.GenaiGenerateLogoGetresultResponse429> Too Many Requests
     * @throws FetchError<431, types.GenaiGenerateLogoGetresultResponse431> Request Header Fields Too Large
     * @throws FetchError<500, types.GenaiGenerateLogoGetresultResponse500> Internal Server Error
     * @throws FetchError<503, types.GenaiGenerateLogoGetresultResponse503> Service Unavailable
     */
    genaiGenerateLogoGetresult(metadata: types.GenaiGenerateLogoGetresultMetadataParam): Promise<FetchResponse<200, types.GenaiGenerateLogoGetresultResponse200> | FetchResponse<202, types.GenaiGenerateLogoGetresultResponse202>>;
    /**
     * **Service Description:**
     *
     *   The **Inpainting** service offers inpainting capabilities, enabling users to fill or
     * replace areas within an image based on specified criteria. It operates in two modes:
     *   * Single Image Mode: Submit one RGBA image. The API fills the specified inner area
     * with content based on the prompt parameter.
     *   * Mask Mode: Along with the RGBA image, provide a mask of identical size and format.
     * The API uses this mask to identify areas for inpainting with content determined by the
     * prompt parameter.
     *
     * @summary Inpaint Image
     * @throws FetchError<400, types.GenaiImageInpaintingResponse400> Bad Request
     * @throws FetchError<401, types.GenaiImageInpaintingResponse401> Unauthorized
     * @throws FetchError<402, types.GenaiImageInpaintingResponse402> Payment Required
     * @throws FetchError<403, types.GenaiImageInpaintingResponse403> Forbidden
     * @throws FetchError<404, types.GenaiImageInpaintingResponse404> Not Found
     * @throws FetchError<405, types.GenaiImageInpaintingResponse405> Method Not Allowed
     * @throws FetchError<413, types.GenaiImageInpaintingResponse413> Request Entity Too Large
     * @throws FetchError<415, types.GenaiImageInpaintingResponse415> Unsupported Media Type
     * @throws FetchError<429, types.GenaiImageInpaintingResponse429> Too Many Requests
     * @throws FetchError<431, types.GenaiImageInpaintingResponse431> Request Header Fields Too Large
     * @throws FetchError<500, types.GenaiImageInpaintingResponse500> Internal Server Error
     * @throws FetchError<503, types.GenaiImageInpaintingResponse503> Service Unavailable
     */
    genaiImageInpainting(body: types.GenaiImageInpaintingBodyParam): Promise<FetchResponse<200, types.GenaiImageInpaintingResponse200> | FetchResponse<202, types.GenaiImageInpaintingResponse202>>;
    /**
     * **Service Description:**
     *
     *   The **Outpainting** service enables outpainting, allowing users to extend or replace
     * specific parts of an image. This is a reversed form of the Inpainting service (drawing
     * outside of the mask, not inside).
     *
     *   It supports two operational modes:
     *   * Single Image Mode: Upload one RGBA image. The API enhances the outer area with
     * content based on the prompt parameter.
     *   * Mask Mode: Provide an RGBA image along with a mask of the same size. The API applies
     * this mask to paint beyond the masked region, using content determined by the prompt
     * parameter.
     *
     * @summary Outpaint Image
     * @throws FetchError<400, types.GenaiImageOutpaintingResponse400> Bad Request
     * @throws FetchError<401, types.GenaiImageOutpaintingResponse401> Unauthorized
     * @throws FetchError<402, types.GenaiImageOutpaintingResponse402> Payment Required
     * @throws FetchError<403, types.GenaiImageOutpaintingResponse403> Forbidden
     * @throws FetchError<404, types.GenaiImageOutpaintingResponse404> Not Found
     * @throws FetchError<405, types.GenaiImageOutpaintingResponse405> Method Not Allowed
     * @throws FetchError<413, types.GenaiImageOutpaintingResponse413> Request Entity Too Large
     * @throws FetchError<415, types.GenaiImageOutpaintingResponse415> Unsupported Media Type
     * @throws FetchError<429, types.GenaiImageOutpaintingResponse429> Too Many Requests
     * @throws FetchError<431, types.GenaiImageOutpaintingResponse431> Request Header Fields Too Large
     * @throws FetchError<500, types.GenaiImageOutpaintingResponse500> Internal Server Error
     * @throws FetchError<503, types.GenaiImageOutpaintingResponse503> Service Unavailable
     */
    genaiImageOutpainting(body: types.GenaiImageOutpaintingBodyParam): Promise<FetchResponse<200, types.GenaiImageOutpaintingResponse200> | FetchResponse<202, types.GenaiImageOutpaintingResponse202>>;
    /**
     * **Service Description:**
     *   The **Smart Background** service elevates photo customization to new heights by
     * offering an innovative solution for altering the backdrop of images. Unlike the
     * traditional "Change Background" feature accessed via the /removebg endpoint, where users
     * must provide a specific image to serve as the new background, **Smart Background**
     * harnesses the power of AI to generate a completely new backdrop based on user
     * descriptions.
     *
     *   In contrast, the /removebg endpoint's "Change Background" function requires a
     * predetermined image to replace the original backdrop. While effective for
     * straightforward substitutions, it lacks the flexibility and creative potential provided
     * by "Smart Background," where the possibilities for your photo's new setting are limited
     * only by your imagination. Whether you're looking to transport your subjects to exotic
     * locales, whimsical landscapes, or bespoke scenarios, "Smart Background" offers a
     * tailored, AI-generated solution for every photo.
     *
     *   With Smart Background, users have the unique opportunity to reimagine their photos by
     * simply submitting an image along with a narrative of the desired background. Our
     * advanced AI algorithms then work to seamlessly integrate a bespoke, contextually
     * appropriate scene behind the subject of the photo. This not only allows for unparalleled
     * personalization but also offers a creative freedom unmatched by conventional methods.
     *
     *   It supports two operational modes:
     *   * Single Image Mode: Upload one RGBA image. The API enhances the outer area with
     * content based on the prompt parameter.
     *   * Mask Mode: Provide an RGBA image along with a mask of the same size. The API applies
     * this mask to paint beyond the masked region, using content determined by the prompt
     * parameter.
     *
     * @summary Smart Background
     * @throws FetchError<400, types.GenaiSmartBackgroundResponse400> Bad Request
     * @throws FetchError<401, types.GenaiSmartBackgroundResponse401> Unauthorized
     * @throws FetchError<402, types.GenaiSmartBackgroundResponse402> Payment Required
     * @throws FetchError<403, types.GenaiSmartBackgroundResponse403> Forbidden
     * @throws FetchError<404, types.GenaiSmartBackgroundResponse404> Not Found
     * @throws FetchError<405, types.GenaiSmartBackgroundResponse405> Method Not Allowed
     * @throws FetchError<413, types.GenaiSmartBackgroundResponse413> Request Entity Too Large
     * @throws FetchError<415, types.GenaiSmartBackgroundResponse415> Unsupported Media Type
     * @throws FetchError<429, types.GenaiSmartBackgroundResponse429> Too Many Requests
     * @throws FetchError<431, types.GenaiSmartBackgroundResponse431> Request Header Fields Too Large
     * @throws FetchError<500, types.GenaiSmartBackgroundResponse500> Internal Server Error
     * @throws FetchError<503, types.GenaiSmartBackgroundResponse503> Service Unavailable
     */
    genaiSmartBackground(body: types.GenaiSmartBackgroundBodyParam): Promise<FetchResponse<200, types.GenaiSmartBackgroundResponse200> | FetchResponse<202, types.GenaiSmartBackgroundResponse202>>;
    /**
     * **Service Description:**
     *
     *   The **Image Expansion** service offers a groundbreaking functionality designed to
     * enhance digital imagery by enabling users to enlarge any image to specific width and
     * height dimensions. This sophisticated feature not only allows generative resizing but
     * also provides the capability to specify the direction of expansion, ensuring that users
     * have complete control over the final appearance of their images.
     *
     *   This service is engineered to accommodate the need for larger image sizes without
     * compromising on quality. The requirement that the specified width and height dimensions
     * exceed the original image dimensions ensures that users can seamlessly scale their
     * images up to meet various requirements, whether for professional presentations, digital
     * marketing materials, web design, or personal use.
     *
     *   It supports two operational modes:
     *   * Single Image Mode: Upload one RGBA image. The API enhances the outer area with
     * content based on the prompt parameter.
     *   * Mask Mode: Provide an RGBA image along with a mask of the same size. The API applies
     * this mask to paint beyond the masked region, using content determined by the prompt
     * parameter.
     *
     * @summary Expand Image
     * @throws FetchError<400, types.GenaiExpandImageResponse400> Bad Request
     * @throws FetchError<401, types.GenaiExpandImageResponse401> Unauthorized
     * @throws FetchError<402, types.GenaiExpandImageResponse402> Payment Required
     * @throws FetchError<403, types.GenaiExpandImageResponse403> Forbidden
     * @throws FetchError<404, types.GenaiExpandImageResponse404> Not Found
     * @throws FetchError<405, types.GenaiExpandImageResponse405> Method Not Allowed
     * @throws FetchError<413, types.GenaiExpandImageResponse413> Request Entity Too Large
     * @throws FetchError<415, types.GenaiExpandImageResponse415> Unsupported Media Type
     * @throws FetchError<429, types.GenaiExpandImageResponse429> Too Many Requests
     * @throws FetchError<431, types.GenaiExpandImageResponse431> Request Header Fields Too Large
     * @throws FetchError<500, types.GenaiExpandImageResponse500> Internal Server Error
     * @throws FetchError<503, types.GenaiExpandImageResponse503> Service Unavailable
     */
    genaiExpandImage(body: types.GenaiExpandImageBodyParam): Promise<FetchResponse<200, types.GenaiExpandImageResponse200> | FetchResponse<202, types.GenaiExpandImageResponse202>>;
    /**
     * **Service Description:**
     *
     *   This service offers a groundbreaking functionality designed to enhance digital imagery
     * by enabling users to enlarge any image.
     *
     *   This service enlarges the original images and generates additional pixels around the
     * original from all sides. This helps print original images without needing to cut part of
     * it during the print production process.
     *   The generated bleed area is a continuation of the original image and will ensure a
     * consistent and high cut quality.
     *
     * @summary Generate Bleed
     * @throws FetchError<400, types.GenaiGenerateImageBleedResponse400> Bad Request
     * @throws FetchError<401, types.GenaiGenerateImageBleedResponse401> Unauthorized
     * @throws FetchError<402, types.GenaiGenerateImageBleedResponse402> Payment Required
     * @throws FetchError<403, types.GenaiGenerateImageBleedResponse403> Forbidden
     * @throws FetchError<404, types.GenaiGenerateImageBleedResponse404> Not Found
     * @throws FetchError<405, types.GenaiGenerateImageBleedResponse405> Method Not Allowed
     * @throws FetchError<413, types.GenaiGenerateImageBleedResponse413> Request Entity Too Large
     * @throws FetchError<415, types.GenaiGenerateImageBleedResponse415> Unsupported Media Type
     * @throws FetchError<429, types.GenaiGenerateImageBleedResponse429> Too Many Requests
     * @throws FetchError<431, types.GenaiGenerateImageBleedResponse431> Request Header Fields Too Large
     * @throws FetchError<500, types.GenaiGenerateImageBleedResponse500> Internal Server Error
     * @throws FetchError<503, types.GenaiGenerateImageBleedResponse503> Service Unavailable
     */
    genaiGenerateImageBleed(body: types.GenaiGenerateImageBleedBodyParam): Promise<FetchResponse<200, types.GenaiGenerateImageBleedResponse200>>;
    /**
     * **Service Description:** Inpaint, Outpaint, Smart Background and Expand services can
     * work asynchronously and expose an inference identifier that can be used later to fetch
     * te results.
     * Use this service to check up on the result.
     *
     * @summary Get the results of the painting
     * @throws FetchError<400, types.GenaiImageInpaintingGetresultResponse400> Bad Request
     * @throws FetchError<401, types.GenaiImageInpaintingGetresultResponse401> Unauthorized
     * @throws FetchError<402, types.GenaiImageInpaintingGetresultResponse402> Payment Required
     * @throws FetchError<403, types.GenaiImageInpaintingGetresultResponse403> Forbidden
     * @throws FetchError<404, types.GenaiImageInpaintingGetresultResponse404> Not Found
     * @throws FetchError<405, types.GenaiImageInpaintingGetresultResponse405> Method Not Allowed
     * @throws FetchError<413, types.GenaiImageInpaintingGetresultResponse413> Request Entity Too Large
     * @throws FetchError<415, types.GenaiImageInpaintingGetresultResponse415> Unsupported Media Type
     * @throws FetchError<429, types.GenaiImageInpaintingGetresultResponse429> Too Many Requests
     * @throws FetchError<431, types.GenaiImageInpaintingGetresultResponse431> Request Header Fields Too Large
     * @throws FetchError<500, types.GenaiImageInpaintingGetresultResponse500> Internal Server Error
     * @throws FetchError<503, types.GenaiImageInpaintingGetresultResponse503> Service Unavailable
     */
    genaiImageInpaintingGetresult(metadata: types.GenaiImageInpaintingGetresultMetadataParam): Promise<FetchResponse<200, types.GenaiImageInpaintingGetresultResponse200> | FetchResponse<202, types.GenaiImageInpaintingGetresultResponse202>>;
    /**
     * **Service Description:**
     *   Check your balance of credits.
     *
     * **Authorization:**
     *     Requires an API key to be provided in the **X-Picsart-API-Key** request header.
     *
     * @summary Balance
     * @throws FetchError<400, types.GenaiCreditsBalanceResponse400> Bad Request
     * @throws FetchError<401, types.GenaiCreditsBalanceResponse401> Unauthorized
     * @throws FetchError<402, types.GenaiCreditsBalanceResponse402> Payment Required
     * @throws FetchError<403, types.GenaiCreditsBalanceResponse403> Forbidden
     * @throws FetchError<404, types.GenaiCreditsBalanceResponse404> Not Found
     * @throws FetchError<405, types.GenaiCreditsBalanceResponse405> Method Not Allowed
     * @throws FetchError<413, types.GenaiCreditsBalanceResponse413> Request Entity Too Large
     * @throws FetchError<415, types.GenaiCreditsBalanceResponse415> Unsupported Media Type
     * @throws FetchError<429, types.GenaiCreditsBalanceResponse429> Too Many Requests
     * @throws FetchError<431, types.GenaiCreditsBalanceResponse431> Request Header Fields Too Large
     * @throws FetchError<500, types.GenaiCreditsBalanceResponse500> Internal Server Error
     * @throws FetchError<503, types.GenaiCreditsBalanceResponse503> Service Unavailable
     */
    genaiCreditsBalance(): Promise<FetchResponse<200, types.GenaiCreditsBalanceResponse200>>;
}
declare const createSDK: SDK;
export default createSDK;
