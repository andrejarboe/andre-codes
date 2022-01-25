// lib/sanity.js
import {
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
  createClient,
} from 'next-sanity';

const config = {
  projectId: 'rmudpb1a',
  dataset: 'production',
  apiVersion: '2021-10-21',
  // use cdn in production
  useCdn: false,
};

export const sanityClient = createClient(config);
export const usePreviewSubscription = createPreviewSubscriptionHook(config);
export const urlFor = (source) => createImageUrlBuilder(config).image(source);
export const PortableText = createPortableTextComponent({
  ...config,
  serializers: {},
});