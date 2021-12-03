import Analytics from "@segment/analytics.js-core/build/analytics";
import SegmentIntegration from "@segment/analytics.js-integration-segmentio";

class Segments {
  constructor() {
    this.analytics = new Analytics();
    this.analytics.use(SegmentIntegration);
    this.integrationSettings = {
      "Segment.io": {
        apiKey: "u9DWIn2sLDO0Qro9h1lLHZENJ7fpjfJH",
        retryQueue: true,
        addBundledMetadata: true,
      },
    };
  }
  initialize() {
    this.analytics.initialize(this.integrationSettings);
  }
  track(name, value) {
    this.analytics.track(name, value || {});
  }
}

export default Segments;
