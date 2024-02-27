import { newSpecPage } from "@stencil/core/testing";
import { CustomWelcome } from "../custom-welcome";
describe('custom-welcome', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [CustomWelcome],
            html: `<custom-welcome></custom-welcome>`,
        });
        expect(page.root).toEqualHtml(`
      <custom-welcome>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </custom-welcome>
    `);
    });
});
//# sourceMappingURL=custom-welcome.spec.js.map
